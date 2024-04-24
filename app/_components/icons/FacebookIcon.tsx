import { ComponentPropsWithoutRef } from "react"

export const FacebookIcon = (props: ComponentPropsWithoutRef<"svg"> & {size?: number}) => {
    return (
        <svg 
        width="256px" 
        height="256px" 
        viewBox="0 0 256 256" 
        version="1.1" 
        preserveAspectRatio="xMidYMid"
        {...props}
        >
    
    <g>
        <path d="M177.825,165 L183.5,128 L148,128 L148,103.98925 C148,93.86675 152.95875,84 168.8595,84 L185,84 L185,52.5 C185,52.5 170.35175,50 156.3475,50 C127.1095,50 108,67.72 108,99.8 L108,128 L75.5,128 L75.5,165 L108,165 L108,254.445 C114.51675,255.4675 121.196,256 128,256 C134.804,256 141.48325,255.4675 148,254.445 L148,165 L177.825,165" 
        fill="currentColor">
        </path>
    </g>
</svg>
    )
}