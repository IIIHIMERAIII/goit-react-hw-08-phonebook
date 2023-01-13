import { Box, Text, Img } from "@chakra-ui/react";
import smile from 'images/smile.webp';

export default function Home() {
    return (
        <>
            <Box
                as='main'
            >
                <Box
                    display='flex'
                    mt={[200, 200, 350]}
                    justifyContent='center'
                >
                    
                    <Box
                        className="typewriter"
                    >
                        <Text
                            as='h1'
                            fontSize={[15, 25, 35]}
                            display='flex'
                            alignItems='center'
                        >
                            {'Phonebook says hello'}
                        <Img
                            src={smile}
                            h={[5, 10, 35]}
                            w={[5, 10, 35]}
                            mr='10px'
                            ml='10px'
                        />
                        </Text>
                    </Box>
                </Box>
            </Box>
        </>
    );
};