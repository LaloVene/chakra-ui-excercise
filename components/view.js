import {
  Container,
  Flex,
  Stack,
  VStack,
  HStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  Divider,
  AspectRatio,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

const View = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const color = useColorModeValue("gray.900", "gray.100");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.200");
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        {/* Details */}
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="2xl">Your Details</Heading>
            <Text>If you already have an account, click here to log in</Text>
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Input id="firstName" placeholder="John" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <Input id="lastName" placeholder="Doe" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel htmlFor="adress">Adress</FormLabel>
                <Input id="adress" placeholder="123 Main St" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel htmlFor="city">City</FormLabel>
                <Input id="city" placeholder="New York" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel htmlFor="country">Country</FormLabel>
                <Select id="country">
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  <option value="mexico">Mexico</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Checkbox defaultChecked>Ship to billing address</Checkbox>
            </GridItem>
            <GridItem colSpan={2}>
              <Button variant="primary" size="lg" w="full">
                Place Order
              </Button>
            </GridItem>
          </SimpleGrid>
        </VStack>

        {/* Cart */}
        <VStack
          w="full"
          h="full"
          p={10}
          spacing={6}
          alignItems="flex-start"
          bg={bgColor}
          color={color}
        >
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="2xl">Your Cart</Heading>
            <Text>
              If price is too hard on your eyes,{" "}
              <Button
                onClick={toggleColorMode}
                variant="link"
                colorScheme="black"
              >
                try changing the theme
              </Button>
            </Text>
          </VStack>
          <HStack spacing={3} alignItems="center" w="full">
            <AspectRatio ratio={1} w={24}>
              <Image
                borderRadius={10}
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
                alt="Product"
              />
            </AspectRatio>
            <Stack
              spacing={0}
              w="full"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <VStack spacing={0} alignItems="flex-start">
                <Heading size="md">Laptop</Heading>
                <Text color={secondaryTextColor}>PNYBVGF04521</Text>
              </VStack>
              <Heading size="md" textAlign="end">
                $119.00
              </Heading>
            </Stack>
          </HStack>
          <VStack spacing={4} alignItems="stretch" w="full">
            <HStack justifyContent="space-between">
              <Text color={secondaryTextColor}>Subtotal</Text>
              <Heading size="sm">$199.00</Heading>
            </HStack>
            <HStack justifyContent="space-between">
              <Text color={secondaryTextColor}>Shipping</Text>
              <Heading size="sm">$19.99</Heading>
            </HStack>
            <HStack justifyContent="space-between">
              <Text color={secondaryTextColor}>Taxes</Text>
              <Heading size="sm">$23.80</Heading>
            </HStack>
            <Divider />
            <HStack justifyContent="space-between">
              <Text color={secondaryTextColor}>Total</Text>
              <Heading size="lg">$162.79</Heading>
            </HStack>
          </VStack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default View;
