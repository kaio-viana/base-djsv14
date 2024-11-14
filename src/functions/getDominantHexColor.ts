import Vibrant from "node-vibrant";
import { Colors, ColorResolvable } from "discord.js";

async function getDominantHexColor(imageUrl: any): Promise<ColorResolvable | null> {
    try {
        const palette = await Vibrant.from(imageUrl).getPalette();
        const dominantColor = palette.Vibrant?.hex;
        
        return dominantColor ? parseInt(dominantColor.slice(1), 16) as ColorResolvable : Colors.Blurple;
    } catch (error) {
        return Colors.Blurple;
    }
}

export { getDominantHexColor };