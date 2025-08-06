import {
  Card,
  Flex,
  Box,
  Anchor,
  Image,
  Container,
  Title,
  Button,
  Divider,
  Group,
  Text,
  Stack,
  Badge,
  Radio,
  Input,
  Checkbox,
  NumberInput,
  SegmentedControl,
  ActionIcon,
  Drawer,
  SimpleGrid,
} from "@mantine/core";
import image2 from "../images/Group-1.png";
import image3 from "../images/icon.png";
import image4 from "../images/calendar_month.png";
import image5 from "../images/image-8.png";
import IconChervonDown from "./iconChervonDown";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import IconTrash from "./iconTrash";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function ReviewBooking() {
  const isSmallscreen = useMediaQuery("(max-width: 56.25em)");
  const [opened, { close }] = useDisclosure(false);
  const [checked, setChecked] = useState(false);
  const [showOptions, setShowOptions] = useState();
  const [inputValue, setInputValue] = useState("");
  const [aashirwardBox, setAashirward] = useState(false);
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    const isChecked = event.currentTarget.checked;
    setChecked(isChecked);

    if (isChecked) {
      setInputValue("Kashyap");
    } else {
      setInputValue("");
    }
  };

  console.log(inputValue)

  const itemsData = [
    {
      id: 1,
      title: "Rahu Kunjika",
      price: 21,
      description:
        "Black sesame laddus, a black dhoti, black urad dal, and a silver serpent (chandi ka naag) will be offered in your name at the Omkareshwar ",
      image: image5,
    },
    {
      id: 2,
      title: "Rahu Kunjika",
      price: 21,
      description:
        "Black sesame laddus, a black dhoti, black urad dal, and a silver serpent (chandi ka naag) will be offered in your name at the Omkareshwar ",
      image: image5,
    },
  ];

  const [members, setMembers] = useState([""]);
  const handleAddMember = () => {
    setMembers((prev) => [...prev, ""]);
  };

  const handleMemberChange = (index, value) => {
    const updated = [...members];
    updated[index] = value;
    setMembers(updated);
  };

  const handleAdd = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: 1 }));
  };

  const handleIncrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => {
      if (prev[id] === 1) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }
      return { ...prev, [id]: prev[id] - 1 };
    });
  };

  return (
    <>
      <Navbar />

      <Drawer
        opened={opened}
        onClose={close}
        title="Menu"
        padding="md"
        size="75%"
      >
        <Flex direction="column" gap="md">
          <Anchor onClick={close} fw={600}>
            Home
          </Anchor>
          <Anchor onClick={close} fw={600}>
            Puja
          </Anchor>
          <Anchor onClick={close} fw={600}>
            Blogs
          </Anchor>
          <Anchor onClick={close} fw={600}>
            About Us
          </Anchor>
        </Flex>

        <Flex align="center" gap={6} mt={16}>
          <Image src={image2} h={35} w={35} />
          <Text fw={600} c="#b3b3b3">
            English
          </Text>
          <ActionIcon
            radius={20}
            h={33}
            w={33}
            bg="transparent"
            c="#B3B3B3"
            style={{ border: "2px solid #B3B3B3" }}
          >
            <IconChervonDown />
          </ActionIcon>
        </Flex>

        <Button
          mt={15}
          w={80}
          h={35}
          fz={14}
          bg="#ed561a"
          px={12}
          onClick={() => alert("Login clicked")}
        >
          Login
        </Button>
      </Drawer>

      <Container fluid p={0} mt={isSmallscreen ? 40 : 0}>
        <Stack gap={40}>
          <Card
            display={isSmallscreen ? "none" : "block"}
            h={80}
            style={{ borderBottom: "1px solid #e4e4e4" }}
            p={0}
            shadow="none"
            px={30}
            radius={0}
          >
            <Flex align={"center"} h={"100%"}>
              <Title fw={600} fz={20}>
                {" "}
                ← Review Booking
              </Title>
            </Flex>
          </Card>

          {/* ///////////// */}

          <Box>
            <Flex justify={"center"}>
              <Card
                w={"90%"}
                shadow="none"
                padding={isSmallscreen ? 0 : 20}
                radius="md"
                bg={"transparent"}
                style={{
                  border: isSmallscreen ? "none" : "1px solid #E0E0E0",
                }}
              >
                <Group mb="md" display={isSmallscreen ? "none" : "block"}>
                  <Text fz={24} fw={700} color="dark">
                    Order Summary
                  </Text>
                </Group>
                <Card
                  style={{
                    border: isSmallscreen ? "none" : "1px solid #E0E0E0",
                  }}
                  mb="lg"
                  bg={"#fef7f4"}
                  shadow="none"
                  p={isSmallscreen ? 0 : 20}
                >
                  <Flex align={"center"} mb="xs">
                    <Text
                      fz={isSmallscreen ? 9 : 16}
                      fw={isSmallscreen ? 500 : 600}
                      style={{ flexGrow: 1 }}
                      pl={isSmallscreen ? 15 : 0}
                    >
                      Rahu-Ketu Peeda Shanti Puja and Shiv Rudrabishek Shanti
                      Puja
                    </Text>

                    {isSmallscreen ? (
                      <ActionIcon
                        variant="subtle"
                        color="white"
                        style={{
                          borderTopLeftRadius: 0,
                          borderTopRightRadius: 5,
                          borderBottomLeftRadius: 7,
                          borderBottomRightRadius: 0,
                        }}
                        bg={"#ED561A"}
                        size={28}
                      >
                        <IconTrash />
                      </ActionIcon>
                    ) : (
                      <Button
                        color="#ED561A"
                        radius={20}
                        w={90}
                        fw={700}
                        fz={12}
                        h={28}
                      >
                        Delete
                      </Button>
                    )}
                  </Flex>

                  <Group gap="xs" mb="sm" px={isSmallscreen ? 15 : 0}>
                    <Button
                      color="#ED571B"
                      radius="xl"
                      w={isSmallscreen ? 113 : 130}
                      h={isSmallscreen ? 26 : 32}
                      fz={isSmallscreen ? 10 : 12}
                    >
                      Partner Puja
                    </Button>
                    <Button size="xs" variant="subtle" color="orange">
                      Edit
                    </Button>
                    <Box style={{ marginLeft: "auto" }}>
                      <Badge
                        color="#ED561A"
                        radius={isSmallscreen ? 5 : 20}
                        px={15}
                      >
                        $201
                      </Badge>
                    </Box>
                  </Group>

                  <Divider size={1} mb={10} />

                  <Group gap="xs" mb="xs" px={20}>
                    <Image src={image3} h={20} w={isSmallscreen ? 15 : 20} />
                    <Text fz={isSmallscreen ? 12 : 16} color="dimmed">
                      Uttar Pardesh Mal Mumbai Pistach
                    </Text>
                  </Group>

                  <Group gap="xs" mb={15} px={20}>
                    <Image src={image4} h={20} w={isSmallscreen ? 15 : 20} />
                    <Text fz={isSmallscreen ? 12 : 16} color="dimmed">
                      28 April IST, Monday, Vaishakha Shukla Pratipada
                    </Text>
                  </Group>
                </Card>

                <Card bg={"#fef7f4"} shadow="none" mb="lg">
                  <Group align="center">
                    <Box style={{ flexGrow: 1 }}>
                      <Text fz={16} fw={700} mb={4}>
                        Extra 365 OFF
                      </Text>

                      {isSmallscreen ? (
                        <Text
                          fz={11}
                          color="dimmed"
                          style={{ lineHeight: 1.3 }}
                        >
                          5% oercent off puja fro this platofrm
                        </Text>
                      ) : (
                        <Text
                          fz={16}
                          color="dimmed"
                          style={{ lineHeight: 1.3 }}
                        >
                          here your puja booking updates like photos videos and
                          other details will be sent on your contact details
                        </Text>
                      )}

                      <Divider
                        display={isSmallscreen ? "none" : "block"}
                        size={2}
                        w={"70%"}
                        mt={10}
                      />
                    </Box>
                    <Button
                      w={isSmallscreen ? 112 : 160}
                      fz={isSmallscreen ? 9 : 16}
                      h={isSmallscreen ? 32 : 36}
                      fw={700}
                      variant="outline"
                      color="orange"
                      radius="md"
                    >
                      Apply Coupon
                    </Button>
                  </Group>
                </Card>
                <Group mb="md">
                  <Text size="md" fw={700} color="dark">
                    Bill Details
                  </Text>
                </Group>

                <Group mb="xl" justify="space-between">
                  <Text fz={14} fw={600} c={"dark"}>
                    Total Amount
                  </Text>
                  <Text fz={16} fw={600} color="orange">
                    $101
                  </Text>
                </Group>
                <Button
                  h={48}
                  fullWidth
                  radius={30}
                  style={{
                    backgroundColor: "#FF5722",
                  }}
                >
                  Continue to Partner Puja
                </Button>
              </Card>
            </Flex>

            <Divider
              size={1}
              mt={30}
              display={isSmallscreen ? "block" : "none"}
            />

            <Flex justify={"center"} mt={10}>
              <Card radius={0} shadow="none" w={"90%"} bg={"transparent"} p={2}>
                <Title fz={isSmallscreen ? 17 : 32} fw={700}>
                  Add More Offerings
                </Title>

                <Card bg={"transparent"} w={"100%"} mt={20} shadow="none" p={0}>
                  <Stack gap={isSmallscreen ? 15 : 30}>
                    {isSmallscreen ? (
                      <SimpleGrid cols={{ xs: 1 }} spacing={10} px={20}>
                        {itemsData.slice(0, 1).map((item) => (
                          <Card
                            key={item.id}
                            w="100%"
                            bg={"transparent"}
                            shadow="none"
                            p={10}
                          >
                            <Flex
                              direction="row"
                              justify="space-between"
                              align="start"
                              h={"100%"}
                            >
                              <Stack gap={25} w="60%">
                                <Box>
                                  <Title mb={10} fz={20} fw={600}>
                                    {item.title}
                                  </Title>
                                  <Text
                                    size="xs"
                                    color="dimmed"
                                    style={{ lineHeight: 1.4 }}
                                  >
                                    {item.description}
                                  </Text>
                                </Box>

                                <Box
                                  mt={8}
                                  w={50}
                                  h={30}
                                  style={{
                                    borderRadius: "4px",
                                    border: "1px solid #ED561A",
                                    fontWeight: 600,
                                    fontSize: "1rem",
                                  }}
                                  c={"#ED561A"}
                                >
                                  <Flex
                                    justify="center"
                                    align="center"
                                    h="100%"
                                  >
                                    <Text>
                                      $
                                      {quantities[item.id]
                                        ? quantities[item.id] * item.price
                                        : item.price}
                                    </Text>
                                  </Flex>
                                </Box>
                              </Stack>

                              <Box
                                style={{
                                  position: "relative",
                                  width: "130px",
                                  minHeight: 150,
                                  overflow: "visible",
                                }}
                              >
                                <Image
                                  src={item.image}
                                  height="100%"
                                  radius={15}
                                  width="auto"
                                  fit="cover"
                                />

                                {quantities[item.id] ? (
                                  <Flex
                                    align="center"
                                    gap="xs"
                                    justify={"space-between"}
                                    h={40}
                                    style={{
                                      position: "absolute",
                                      top: 110,
                                      left: "50%",
                                      transform: "translateX(-50%)",
                                      width: 120,
                                      backgroundColor: "#157709",
                                      borderRadius: 6,
                                      fontSize: 32,
                                      padding: "0 10px",
                                    }}
                                  >
                                    <Button
                                      size="xs"
                                      radius="xl"
                                      c={"white"}
                                      fz={20}
                                      color="gray"
                                      onClick={() => handleDecrement(item.id)}
                                    >
                                      -
                                    </Button>
                                    <Text c={"white"}>
                                      {quantities[item.id]}
                                    </Text>
                                    <Button
                                      size="xs"
                                      radius="xl"
                                      color="green"
                                      onClick={() => handleIncrement(item.id)}
                                    >
                                      +
                                    </Button>
                                  </Flex>
                                ) : (
                                  <Button
                                    h={40}
                                    radius={6}
                                    style={{
                                      position: "absolute",
                                      top: 110,
                                      left: "50%",
                                      width: 110,
                                      transform: "translateX(-50%)",
                                      backgroundColor: "#157709",
                                      color: "white",
                                      fontWeight: 600,
                                    }}
                                    onClick={() => handleAdd(item.id)}
                                  >
                                    Add
                                  </Button>
                                )}
                              </Box>
                            </Flex>
                          </Card>
                        ))}
                      </SimpleGrid>
                    ) : (
                      <SimpleGrid
                        cols={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}
                        spacing={10}
                        px={110}
                        mb={isSmallscreen ? 0 : 10}
                      >
                        {itemsData.map((item) => (
                          <Card
                            key={item.id}
                            bg="transparent"
                            shadow="none"
                            p={10}
                          >
                            <Group
                              mb="xs"
                              gap="xs"
                              display={isSmallscreen ? "none" : "block"}
                            >
                              <Radio
                                fw={600}
                                label={item.title}
                                name="radio"
                                radius={15}
                                variant="outline"
                              />
                            </Group>

                            <Flex
                              mb="sm"
                              align="end"
                              w="30%"
                              gap={10}
                              justify="start"
                            >
                              <Image
                                src={item.image}
                                h={100}
                                style={{ objectFit: "contain" }}
                              />
                              <Stack>
                                <Box
                                  ml={20}
                                  w={60}
                                  h={30}
                                  style={{
                                    borderRadius: "4px",
                                    border: "1px solid #ED561A",
                                    color: "white",
                                    fontWeight: 600,
                                    fontSize: "1rem",
                                  }}
                                  c={"#ED561A"}
                                >
                                  <Flex
                                    justify={"center"}
                                    align={"center"}
                                    h={"100%"}
                                  >
                                    <Text>
                                      $
                                      {quantities[item.id]
                                        ? quantities[item.id] * item.price
                                        : item.price}
                                    </Text>
                                  </Flex>
                                </Box>

                                {quantities[item.id] ? (
                                  <Flex
                                    align="center"
                                    gap="xs"
                                    justify={"space-between"}

                                    style={{
                                      width: 120,
                                      backgroundColor: "#157709",
                                      borderRadius: 6,
                                      fontSize: 32,

                                    }}
                                  >
                                    <Button
                                      size="xs"
                                      radius="xl"
                                      color="gray"
                                      onClick={() => handleDecrement(item.id)}
                                    >
                                      -
                                    </Button>
                                    <Text>{quantities[item.id]}</Text>
                                    <Button
                                      h={40}
                                      radius="xl"
                                      c={"white"}
                                      color="green"
                                      onClick={() => handleIncrement(item.id)}
                                    >
                                      +
                                    </Button>
                                  </Flex>
                                ) : (
                                  <Button
                                    variant="filled"
                                    color="#157709"
                                    size="sm"
                                    radius="md"
                                    onClick={() => handleAdd(item.id)}
                                  >
                                    + Add
                                  </Button>
                                )}
                              </Stack>
                            </Flex>

                            <Text
                              size="sm"
                              color="dimmed"
                              style={{ lineHeight: 1.4 }}
                              w="100%"
                            >
                              {item.description}
                            </Text>
                          </Card>
                        ))}
                      </SimpleGrid>
                    )}

                    <Title fz={isSmallscreen ? 17 : 32} fw={700}>
                      Checkout Process
                    </Title>

                    <Stack gap={20}>
                      <Card mb="lg" bg={"#fafafa"} shadow="none">
                        <Text
                          fz={isSmallscreen ? 15 : 18}
                          fw={700}
                          mb={5}
                          style={{ flexGrow: 1 }}
                        >
                          Whatsapp Number
                        </Text>
                        <Text fw={500} fz={isSmallscreen ? 12 : 16}>
                          here your puja booking updates like photos videos and
                          other details will be sent on your contact details
                        </Text>
                        <Divider
                          size={1}
                          mt={8}
                          display={isSmallscreen ? "none" : "block"}
                        />

                        <Input
                          mt={15}
                          size="lg"
                          placeholder="Enter your Whatsapp Number"
                          styles={{
                            input: {
                              background: "#f2f4f8",
                              border: 0,
                            },
                          }}
                        />
                      </Card>

                      <Card mb="lg" bg={"#fafafa"} shadow="none">
                        <Text
                          fz={isSmallscreen ? 15 : 16}
                          fw={700}
                          mb={8}
                          style={{ flexGrow: 1 }}
                        >
                          Name of Member Participating in Puja
                        </Text>

                        {isSmallscreen ? (
                          <Text fw={600} c={"grey"} fz={9}>
                            here your puja booking updates like photos videos
                            and other details will be sent on your contact
                            details
                          </Text>
                        ) : (
                          <Text fw={500} fz={16}>
                            Pandit will take these names along with gotra during
                            puja
                          </Text>
                        )}

                        <Divider
                          size={1}
                          mt={8}
                          display={isSmallscreen ? "none" : "block"}
                        />


                        <Input
                          mt={15}
                          size="lg"
                          placeholder="First Member Name"
                          styles={{
                            input: {
                              background: "#f2f4f8",
                              border: 0,
                            },
                          }}
                        />


                        <Checkbox

                          radius={2}
                          styles={{
                            label: { cursor: "pointer" },
                            input: {
                              cursor: "pointer",
                              border: "1px solid #ED561A",
                            },
                          }}
                          color="#ED561A"
                          mt={15}
                          onChange={(e) =>
                            setShowOptions(e.currentTarget.checked)
                          }
                          label="Add More Member, click add"
                        />


                        {showOptions && (
                          <Box mt={15}>
                            {members.map((value, index) => (
                              <Input
                                key={index}
                                value={value}
                                placeholder={`Member ${index + 2} Name`}
                                mt={10}
                                size="lg"
                                onChange={(e) =>
                                  handleMemberChange(index, e.target.value)
                                }
                                styles={{
                                  input: {
                                    background: "#f2f4f8",
                                    border: 0,
                                  },
                                }}
                              />
                            ))}

                            <Button
                              mt={10}
                              size="xs"
                              color="#ED561A"
                              radius="md"
                              onClick={handleAddMember}
                            >
                              + Add Another Member
                            </Button>
                          </Box>
                        )}
                      </Card>
                      <Card mb="lg" bg={"#fafafa"} shadow="none">
                        <Text
                          fz={isSmallscreen ? 15 : 18}
                          fw={700}
                          style={{ flexGrow: 1 }}
                        >
                          Fill Participiant Gotra
                        </Text>
                        <Text fw={500} fz={isSmallscreen ? 12 : 14}>
                          here your puja booking updates like photos videos and
                          other details will be sent on your contact details
                        </Text>
                        <Divider
                          size={1}
                          mt={8}
                          display={isSmallscreen ? "none" : "block"}
                        />

                        <Input
                          mt={15}
                          size="lg"
                          placeholder="Names of Gotra"
                          styles={{
                            input: {
                              background: "#f2f4f8",
                              border: 0,
                            },
                          }}
                        />
                        <Checkbox
                          defaultChecked
                          color="#ED561A"
                          radius={2}
                          mt={15}
                          styles={{
                            label: { cursor: "pointer" },
                            input: {
                              cursor: "pointer",
                              border: "1px solid #ED561A",
                            },
                          }}
                          label="i don't know my gotra"
                          checked={checked}
                          onChange={handleCheckboxChange}
                        />
                      </Card>

                      <Card mb="lg" bg={"#fafafa"} shadow="none">
                        <Flex
                          align={"center"}
                          gap={10}
                          mb={isSmallscreen ? 10 : 0}
                        >
                          {isSmallscreen ? (
                            <Text
                              fz={isSmallscreen ? 14 : 14}
                              fw={700}
                              style={{ flexGrow: 1 }}
                            >
                              Recieve the Aashirward box?
                            </Text>
                          ) : (
                            <Text fz={16} fw={700} style={{ flexGrow: 1 }}>
                              Would you like to recieve the Aashirward box?
                            </Text>
                          )}
                          <SegmentedControl
                            data={["No", "Yes"]}
                            radius={20}
                            h={40}
                            w={130}
                            bg={"#ED561A"}
                            onChange={() => setAashirward(!aashirwardBox)}
                          />
                        </Flex>

                        <Text fw={500} fz={isSmallscreen ? 9 : 14}>
                          here your puja booking updates like photos videos and
                          other details will be sent on your contact details
                        </Text>

                        <Divider
                          size={1}
                          mt={8}
                          display={isSmallscreen ? "none" : "block"}
                        />

                        {aashirwardBox && (
                          <Stack gap={15}>
                            <Flex
                              w={"100%"}
                              gap={30}
                              mt={20}
                              direction={isSmallscreen ? "column" : "row"}
                            >
                              <NumberInput
                                w={isSmallscreen ? "100%" : "50%"}
                                radius={3}
                                size="lg"
                                placeholder="Pin Code (Compulsory)"
                                styles={{
                                  input: {
                                    background: "#f2f4f8",
                                    border: 0,
                                  },
                                }}
                              />

                              <Input
                                w={isSmallscreen ? "100%" : "50%"}
                                size="lg"
                                placeholder="City Name (Compulsory)"
                                styles={{
                                  input: {
                                    background: "#f2f4f8",
                                    border: 0,
                                  },
                                }}
                              />
                            </Flex>

                            <Flex
                              w={"100%"}
                              gap={30}
                              mt={20}
                              direction={isSmallscreen ? "column" : "row"}
                            >
                              <Input
                                w={isSmallscreen ? "100%" : "50%"}
                                radius={3}
                                size="lg"
                                placeholder="State Name (Compulsory)"
                                styles={{
                                  input: {
                                    background: "#f2f4f8",
                                    border: 0,
                                  },
                                }}
                              />

                              <NumberInput
                                w={isSmallscreen ? "100%" : "50%"}
                                size="lg"
                                placeholder="House No. Building name (Compulsory)"
                                styles={{
                                  input: {
                                    background: "#f2f4f8",
                                    border: 0,
                                  },
                                }}
                              />
                            </Flex>

                            <Flex
                              w={"100%"}
                              gap={30}
                              mt={20}
                              direction={isSmallscreen ? "column" : "row"}
                            >
                              <Input
                                w={isSmallscreen ? "100%" : "50%"}
                                radius={3}
                                size="lg"
                                placeholder="Area, Road, Street (Compulsory)"
                                styles={{
                                  input: {
                                    background: "#f2f4f8",
                                    border: 0,
                                  },
                                }}
                              />

                              <Input
                                w={isSmallscreen ? "100%" : "50%"}
                                size="lg"
                                placeholder="Landmark (Compulsory)"
                                styles={{
                                  input: {
                                    background: "#f2f4f8",
                                    border: 0,
                                  },
                                }}
                              />
                            </Flex>
                          </Stack>
                        )}
                      </Card>
                    </Stack>

                    <Button
                      bg={"#ED561A"}
                      mb={20}
                      radius={30}
                      h={48}
                      onClick={() => navigate("/thank-you")}
                    >
                      Processed and make payment
                    </Button>
                  </Stack>
                </Card>
              </Card>
            </Flex>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default ReviewBooking;
