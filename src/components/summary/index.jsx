import { Box, Flex, Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import TransactionForm from "../add-transaction";
import TransactionChartSummary from "../chart";
export default function Summary({onClose,isOpen,totalExpense,totalIncome}) {
  return (
    <Box
      p="6"
      border={"1px solid"}
      borderColor={"gray.100"}
      overflow={"hidden"}
      borderRadius={"10"}
      background={"white"}
      display={"flex"}
    >
      <Flex
        w="full"
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Flex
          flex={1}
          w={"full"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          mr={"2"}
          ml={"-20"}
        >
          <Heading size={"md"} mp={"4"} color={"gray.600"}>
            {" "}
            Balance is $ {totalIncome-totalExpense}
          </Heading>
          <Flex
            alignItems={"center"}
            justifyContent={"space-evenly"}
            bg={"gray.50"}
            w="full"
            h="100px"
            border={"1px solid"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>${totalIncome} </Heading>
              <Text color={"gray.600"}>Total Income</Text>
            </Flex>
          </Flex>
          <Flex
            alignItems={"center"}
            justifyContent={"space-evenly"}
            bg={"gray.50"}
            w="full"
            h="100px"
            border={"1px solid"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>${totalExpense} </Heading>
              <Text color={"gray.600"}>Total Expense</Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          flex={1}
          mt={"10"}
          ml={"-90px"}
          mr={"5"}
          width={"30px"}
          height={"300px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading><TransactionChartSummary expense={totalExpense} income={totalIncome}/></Heading>
        </Box>
      </Flex>
      <TransactionForm onClose={onClose} isOpen={isOpen}></TransactionForm>

    </Box>
  );
}
