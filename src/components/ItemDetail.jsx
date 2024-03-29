import React from 'react'
//Importe de componentes de la libreria de Chakra
import {Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup } from '@chakra-ui/react'
//Importe de ItemCount
import ItemCount from './ItemCount'

const ItemDetail = ({titulo, descripcion, precio}) => {

    return (
    //Card de chakra para mostrar los datos de cada producto (Titulo, Descripcion y Precio) y el ItemCount
    <Card maxW='sm'>
        <CardBody>
            <Stack mt='6' spacing='3'>
                <Heading size='md'>
                    {titulo}
                </Heading>
                <Text>
                    {descripcion}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    ${precio}
                </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
                <ItemCount />
            </ButtonGroup>
        </CardFooter>
    </Card>
  )
}

export default ItemDetail