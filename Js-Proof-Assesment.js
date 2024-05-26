
// variable to hold nft
const Football_Container = []


// function to mint NFT
// it takes some parameters as input (insta_id,name,age,Country,Club)
function Football_Data(insta_id,name,age,Country,Club){

    // creatting an object to store the details of the NFT
    football = {
        insta_id:insta_id,
        name:name,
        age:age,
        Country:Country,
        Club:Club
    }

    // adding the NFT to Football_Football_Container
    Football_Container.push(football)
}

// function to print a single Football NFT
function printFootallNFT(FootallNFT){
    console.log("Instagram_ID: "+FootallNFT.insta_id)
    console.log("Player Name : "+FootallNFT.name)
    console.log("Age         : "+FootallNFT.age)
    console.log("Country     : "+FootallNFT.Country)
    console.log("Club        : "+FootallNFT.Club)
    console.log("\n")
}

// function to print the NFT collection stored in list
function listNFTs(){
    for(let i=0;i<Football_Container.length;i++){
        console.log((i+1)+".")
        printFootallNFT(Football_Container[i])
    }
}

// function to print and return the number of NFTs stored in the list
function getTotalSupply(){
    console.log("Total NFTs: "+Football_Container.length)
    return Football_Container.length
}

// calling Football_Data function with few random data
Football_Data("@cristiano","Cristiano Ronaldo",38,"Portugal","Al Nassr")
Football_Data("@leoMessi","Lionel Messi",36,"Argentina","Inter Miami")
Football_Data("@SergioRamos","Sergio Ramos",36,"Spain","Sevilla")
Football_Data("@LukaModric10","Luka Modric",37,"Crotia","Real Madrid")
Football_Data("@Toni.kr8s","Toni Kross",34,"Germany","Real Madrid")

// calling listNFTs function to print the NFT collection
listNFTs()
console.log()

// calling getTotalSupply function to print the number of NFTs available in the list
getTotalSupply()
