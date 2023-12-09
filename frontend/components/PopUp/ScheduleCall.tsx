import { Box, Button, Flex, FormLabel, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, useColorModeValue, ModalFooter, ModalOverlay, Stack, Text, Textarea, useDisclosure, Input } from '@chakra-ui/react';
import React, { useState } from 'react';


type ScheduleCallProps = {
    //Wallet adddress of mentee

    // open: boolean;

    // //callback function that doesn't return anything
    // handleClose: () => void;
    price: number;
};




const ScheduleCall: React.FC<ScheduleCallProps> = (props) => {

    const [hour, setHour] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [date, setDate] = useState("");

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);
    //TO-DO
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // const { error } = "hi";

        let error = true;

        if (error) {
            console.log(error);
            setShowSuccessMessage(false);
            setShowFailureMessage(true);

            return;
        }

        setShowSuccessMessage(true);
        setShowFailureMessage(false);


    }

    // const setValuesForMeeting = () => {
	// 	setMenteeName("tushar");
	// 	setMentorName("raju");
	// 	setPrice("99245");
	// 	setService("blockchain");
	// 	setCurrentTimestamp("1323124");
	// 	setMeetingSchedule("234565");
	// 	setMeetingStatus("scheduled");
	// };

	const RequestMeeting = async (e: React.FormEvent) => {
        e.preventDefault();

	};

    return (
        <>
            <Button

                bg={"black"}
                color={'white'}
                fontSize={"15"}
                rounded={'md'}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}

                onClick={onOpen}>Schedule Meet</Button>
            {/* <Button ml={4} ref={finalRef}>
                I wil receive focus on close
            </Button> */}

            <Modal

                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <Flex bg="brand.300" color={"black"} justifyContent={"center"} p={5}>
                        <Heading fontSize={25}>Schedule a Meet</Heading>
                    </Flex>

                    <ModalCloseButton color={"white"} />
                    <ModalBody pb={6}>

                        <Box p={1} mt={5} >

                            <form onSubmit={RequestMeeting}>


                                <Flex justifyContent={"space-between"}>

                                    <Box width={"160px"}>
                                        <FormLabel fontWeight={800}>No. of Hours</FormLabel>
                                        <Input
                                            mb={7}
                                            type='number'
                                            name='hour'
                                            value={hour}
                                            onChange={(e) => {
                                                setHour(parseInt(`${e.target.value}`));
                                                setTotalPrice(parseInt(`${e.target.value}`) * props.price as number);
                                            }}
                                            ref={initialRef} placeholder='Hours' />
                                        <Input
                                            placeholder="Select Date and Time"
                                            size="md"
                                            name="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value as string)}
                                            type="datetime-local"
                                        />

                                    </Box>
                                    <Box>
                                        <FormLabel fontWeight={800}>Total price</FormLabel>
                                        <Text>{totalPrice}</Text>
                                    </Box>
                                </Flex>

                                <Flex justifyContent={"flex-end"}>
                                    <Button type="submit" colorScheme='blue' mr={3}>
                                        Schedule
                                    </Button>
                                    <Button onClick={onClose} bg={"red.500"}>Cancel</Button>
                                </Flex>

                            </form>

                        </Box>


                    </ModalBody>

                    <ModalFooter>
                        <Stack>




                            <Box>
                                {showSuccessMessage && <Text align={"center"} color={"brand.200"} fontWeight={600}>Request Sent Successfully!</Text>}
                                {showFailureMessage && <Text align={"center"} color={"red"} fontWeight={400}>Could not submit the request, please check all the fields and try again!</Text>}
                            </Box>
                        </Stack>



                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ScheduleCall;