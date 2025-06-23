// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";

contract NFTMarketPlace is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;//h
    Counters.Counter private _itemsSold;//tract how many token sold
    address payable owner;
    uint256 public ListingPrice=0.025 ether;//why?->lsiting of nfts paise lagega list karne ko  
    //----------ERROR-----------
 

    //----------modifer----------
    modifier onlyowner {
        if(msg.sender!=owner){
            revert("you ar not owner ");
        }_;
        
    }

    mapping(uint256 => MarketItem) private idMarketItem;
    struct MarketItem{
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;

    }
    event idMarketItemCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    constructor()ERC721("NFT Metaverse Token","NFTMT"){
        owner = payable(msg.sender);
    }

    //function for udating listing price
    function UpdateListingprice(uint256 _ListingPrice)public payable onlyowner{
            ListingPrice=_ListingPrice;
    }
    //create nft token function
    function CreateToken (string memory tokenURI,uint256 price) public payable returns(uint256){//what to return tokenid
         _tokenIds.increment();

         uint256 newTokenId=_tokenIds.current();
         _mint(msg.sender,newTokenId);//now mint  from openzepplin
         _setTokenURI(newTokenId,tokenURI);//seet the tokenuri for new tokenid openzepplin
         CreateMarketItem(newTokenId,price);
         return newTokenId;
    }
     //// Function to list an NFT for sale on the marketplace
    function CreateMarketItem(uint256 newTokenId,uint256 price) private{
        if(price==0)revert("PriceMustBeGreaterThanZero");
        if(msg.value!=ListingPrice)revert("PriceMustBeEqToListPrice");

        idMarketItem[newTokenId]=MarketItem(
            newTokenId,
            payable(msg.sender),//seller
            payable(address(this)),//owner
            price,
            false

        );
        _transfer(msg.sender,address(this),newTokenId);// transfer from sellerto ->contract address
        emit idMarketItemCreated(newTokenId,msg.sender,address(this),price,false);


    }

    //function for resale token
    function ReSellToken(uint256 tokenId,uint256 price) public payable{
        if(idMarketItem[tokenId].owner!=msg.sender)revert("YouAreNotOwner");
        if(msg.value!=ListingPrice)revert("PriceMustBeEqToListPrice");

         if (idMarketItem[tokenId].sold && _itemsSold.current() > 0) {
        _itemsSold.decrement();
    }

        idMarketItem[tokenId].sold=false;
        idMarketItem[tokenId].price=price;
        idMarketItem[tokenId].seller=payable(msg.sender);
        idMarketItem[tokenId].owner=payable(address(this));
        
        _transfer(msg.sender,address(this),tokenId);// transfer from sellerto ->contract address    
    }
    //this function allow the user to buy the token
    function CreateMarketsale(uint256 tokenId)public payable{
        uint256 price=idMarketItem[tokenId].price;
        if(msg.value!=price)revert("PriceMustBeAskingPrice");

        idMarketItem[tokenId].owner=payable(msg.sender);
        idMarketItem[tokenId].sold=true;
        idMarketItem[tokenId].seller=payable(address(0));//this nft not belong to this contract
        _transfer(address(this),msg.sender,tokenId);// transfer from contract address to buyer
        payable(owner).transfer(ListingPrice);//transfer listing price to me
        payable(idMarketItem[tokenId].seller).transfer(msg.value);//transfer the remaing  price to seller who listed this nft


    }

    
   








    ///GETTER function/////
    function getListingPrice()public view returns(uint256){
        return ListingPrice;
    }
     //function to fetch unsold items
    function fetchmarketitem() public view returns(MarketItem[] memory){
       uint256 itemCount=_tokenIds.current();//count the number of nft listed
        uint256 unSoldItemCount=_tokenIds.current()-_itemsSold.current(); 
        uint256 currentindex=0;
        MarketItem[] memory items=new MarketItem[](unSoldItemCount);//take a arr(items) of size unsold item
        for(uint256 i=0;i<itemCount;i++){//those nft which are belog to this contract
            if(idMarketItem[i+1].owner==address(this)){
                 uint256 currentId=i+1;

                MarketItem storage currentitem=idMarketItem[currentId];
                items[currentindex]=currentitem;
                currentindex+=1;


            }
        }  
        return items;                                                     
    }
    
    //function to fetch client nfts
    function fetchMyNFT() public view returns(MarketItem[] memory){
        uint256 totalCount=_tokenIds.current();
        uint256 itemCount=0;
        uint256 currentIndex=0;
        for(uint256 i=0;i<totalCount;i++){
            if(idMarketItem[i+1].owner==msg.sender){
                itemCount+=1;
            }
        }
        MarketItem[] memory items=new MarketItem[](itemCount);
        for(uint256 i=0;i<totalCount;i++){
            if(idMarketItem[i+1].owner==msg.sender){
                uint256 currentId=i+1;
                MarketItem storage currentitem=idMarketItem[currentId];
                items[currentIndex]=currentitem;
                currentIndex+=1;
            }
        }
        return items;
    }

    //function gives the items listed by the seller() single user
    function fetchItemListed()public view returns(MarketItem[] memory){
        uint256 totalCount=_tokenIds.current();
        uint256 itemCount=0;
        uint256 currentIndex=0;
        for(uint256 i=0;i<totalCount;i++){
            if(idMarketItem[i+1].seller==msg.sender){
                itemCount+=1;
            }
        }
        MarketItem[] memory items=new MarketItem[](itemCount);
        for(uint256 i=0;i<totalCount;i++){
            if(idMarketItem[i+1].seller==msg.sender){
                uint256 currentId=i+1;
                MarketItem storage currentitem=idMarketItem[currentId];
                items[currentIndex]=currentitem;
                currentIndex+=1;
            }
        }
        return items;
    }

}
