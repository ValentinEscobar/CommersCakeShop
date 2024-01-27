import React from 'react'
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, CardHeader, } from '@chakra-ui/react'

const Cart = () => {
  return (
    <div>
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src=''
            alt='Imagen del producto seleccionado'
        />

        <Stack>
            <CardBody>
            <Heading size='md'>Titulo del producto seleccionado</Heading>

            <Text py='2'>
                Descripcion del producto seleccionado
            </Text>
            <Text py='2'>
                Precio del producto $ 1111
            </Text>
            </CardBody>

            <CardFooter>
            <Button variant='solid' colorScheme='blue'>
                Eliminar del Carrito
            </Button>
            </CardFooter>
        </Stack>
        </Card>
        <Stack spacing='4'>
            <Card >
            <CardHeader>
                <Heading >TOTAL: $1111</Heading>
            </CardHeader>
            <CardBody>
                <Button>
                Finalizar compra
                </Button>
            </CardBody>
            </Card>
        </Stack> 
    </div>
  )
}

export default Cart