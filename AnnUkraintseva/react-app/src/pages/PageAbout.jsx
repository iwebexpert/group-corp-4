import React from "react"
import Typography from '@mui/material/Typography'


import ContainerWrapper from "./ContainerWrapper"

export default function PagesAbout(){

    return(
        <ContainerWrapper>
            <Typography component='h2' >
                О приложении
            </Typography>
            <Typography component='h3' >
                Учебное приложение: Украинцева Аня
            </Typography>
            
        </ContainerWrapper>
    )
}