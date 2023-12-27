import React from 'react'
//Importe de componentes de la libreria de Chakra
import {Card, CardBody, Stack, Heading, Divider, CardFooter,Button, ButtonGroup } from '@chakra-ui/react'
// Importe el componentes de rutas y navegacion de React Router
import { Link } from 'react-router-dom'


const Item = ({titulo, id}) => {
    //card para cada producto con su titulo y un boton para ver mas detalles del producto
  return (
    <Card maxW='sm'>
        <CardBody>
            <Stack mt='6' spacing='3'>
                <Heading size='md'>
                    {titulo}
                </Heading>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
                <Link to ={`/item/${id}`}>
                    <Button>
                        Ver detalle
                    </Button>
                </Link>
            </ButtonGroup>
        </CardFooter>
    </Card>
  )
}

export default Item