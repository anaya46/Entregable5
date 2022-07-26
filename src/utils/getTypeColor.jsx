const getTypeColor = type => {
    switch(type){
        case "fire":
            return "#FF7F00"
        case "normal":
                return "#DDCCAA"  
        case "fighting":
                return "#FF6A6A"           
        case "flying":
                return "#BAAAFF"
        case "poison":
                return "#CC88BB"            
        case "ground":
                return "#DEB887" 
        case "rock":
                return "#CD853F" 
        case "bug":
                return "#99CC33"  
        case "ghost":
                return "#778899"        
        case "steel":
                return "#CCCCCC"
        case "water":
                return "#00A0E9" 
        case "grass":
                return "#99FF66"   
        case "electric":
                return "#FFD700"   
        case "psychic":
                return "#FFB5C5"  
        case "ice":
                return "#ADD8E6"   
        case "dragon":
                return "#AB82FF"          
        case "dark":
                return "#A9A9A9"  
        case "fairy":
                return "#FFB0FF"                                           
        
                default:
            return "gray"     

    }
}

export default getTypeColor;