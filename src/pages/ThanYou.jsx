import {
  ActionIcon,
  Anchor,
  Text,
  Image,
  Box,
  Button,
  Card,
  CheckIcon,
  Container,
  Flex,
  Group,
  Stack,
  Title,
  Drawer,
  BackgroundImage,
  SimpleGrid,
} from "@mantine/core";

import image1 from "../images/Trident Emblem.webp";
import image2 from "../images/image-11.png";
import image3 from "../images/image-5.png";
import image4 from "../images/Trident Emblem.webp";
import image5 from "../images/Group-2.png";
import image6 from "../images/Group-3.png";
import image7 from "../images/Group-1.png";
import image8 from "../images/image-1.png";
import image9 from "../images/image-3.png";
import IconBrandMail from "./iconMail";
import IconBrandMap from "./iconMap";
import IconPhone from "./iconPhone";
import IconBrandTwitter from "./iconTwitter";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import IconChervonUp from "./IconChervonUp";
import IconChervonDown from "./iconChervonDown";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import IconBrandFacebook from "./iconFacebook";

function ThanYou() {
  const isSmallscreen = useMediaQuery("(max-width: 56.25em)");
  const [opened, { close }] = useDisclosure(false);
  const navigate = useNavigate();
  return (
    <>
      <Container fluid p={0}>
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
            <Image src={image7} h={35} w={35} />
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

        <Stack>
          <Box>
            <Flex justify={"center"} w={"100%"} px={15} mt={15}>
              <Card
                w={{ base: "100%", md: "70%" }}
                bg={"#f9f5f4"}
                p={0}
                shadow="none"
                style={{ borderRadius: 10 }}
              >
                <Stack>
                  <Card
                    bg={"transparent"}
                    shadow="none"
                    p={0}
                    py={30}
                    radius={0}
                    style={{ borderBottom: "2px solid #e5e3e2" }}
                  >
                    <Flex justify={"space-between"} px={isSmallscreen ? 20 : 50}>
                      <Flex gap={8} align="center">
                        <Title order={5} c={"#9abdcc"}>
                          Order Summary
                        </Title>

                        <ActionIcon bg={"transparent"} c={"#9abdcc"} fz={22}>
                          <IconChervonUp />
                        </ActionIcon>
                      </Flex>

                      <Text fz={20} fw={700}>
                        ₹457.00
                      </Text>
                    </Flex>
                  </Card>

                  <Card
                    px={isSmallscreen ? 10 : 50}
                    bg={"transparent"}
                    shadow="none"
                  >
                    <Stack gap={20}>
                      <Flex justify={"space-between"} gap={10}>
                        <Flex gap={isSmallscreen ? 10 : 30}>
                          <Image
                            src={image3}
                            h={isSmallscreen ? 80 : 110}
                            w={isSmallscreen ? 90 : 130}
                            style={{ objectFit: "cover" }}
                            radius={8}
                          />
                          <Stack gap={10}>
                            <Text
                              fz={isSmallscreen ? 12 : 20}
                              fw={600}
                              w={isSmallscreen ? "100%" : "55%"}
                            >
                              Puja For Shani Sade Sati, Relief From Obstacles
                              and Delay at Shani Shingnapur Temple, Ahmednagar
                            </Text>
                            <Text
                              c={"grey"}
                              fw={isSmallscreen ? 600 : 500}
                              w={isSmallscreen ? "100%" : "50%"}
                              fz={isSmallscreen ? 14 : 18}
                            >
                              Homa and Non Gotra Sankalp for Individual
                            </Text>
                          </Stack>
                        </Flex>

                        <Text fz={isSmallscreen ? 16 : 20} fw={600} c={"dark"}>
                          ₹457.00
                        </Text>
                      </Flex>

                      <Flex justify={"space-between"}>
                        <Flex gap={8} align="center">
                          <Title order={5} c={"dark"}>
                            SubTotal
                          </Title>
                        </Flex>

                        <Text fz={isSmallscreen ? 16 : 20} fw={600} c={"dark"}>
                          ₹457.00
                        </Text>
                      </Flex>

                      <Flex justify={"space-between"}>
                        <Flex gap={8} align="center">
                          <Title order={5} c={"dark"}>
                            Shipping
                          </Title>
                        </Flex>

                        <Text fz={isSmallscreen ? 16 : 20} fw={600} c={"dark"}>
                          Free
                        </Text>
                      </Flex>

                      <Flex justify={"space-between"}>
                        <Flex gap={8} align="center">
                          <Title fz={22} c={"dark"}>
                            Total
                          </Title>
                        </Flex>

                        <Flex gap={10} align={"center"}>
                          <Text fz={16} fw={500} c={"dark"}>
                            INR
                          </Text>
                          <Text fz={isSmallscreen ? 18 : 20} fw={700}>
                            ₹457.00
                          </Text>
                        </Flex>
                      </Flex>
                    </Stack>
                  </Card>
                  <Card
                    shadow="none"
                    radius={0}
                    style={{ borderTop: "1px solid #e5e3e2" }}
                  >
                    <Flex gap={20} align={"center"} justify={isSmallscreen ? "center" : "flex-start"}>
                      <Box
                        w={60}
                        h={60}
                        style={{
                          borderRadius: 30,
                          border: "2px solid #79a2ba",
                        }}
                      >
                        <Flex justify={"center"} align={"center"} h={"100%"}>
                          <CheckIcon height={20} color="#79a2ba" />
                        </Flex>
                      </Box>
                      <Box>
                        <Text c={"grey"}>Confirmation #CXLMRCPP7</Text>
                        <Title order={4}>Thank You, Ravi!</Title>
                      </Box>
                    </Flex>
                  </Card>
                </Stack>
              </Card>
            </Flex>

            <Flex justify="center">
              <Card
                w="100%"
                px={isSmallscreen ? 10 : 70}
                radius={0}
                bg="transparent"
                shadow="none"
              >
                <Flex
                  justify={isSmallscreen ? "flex-start" : "space-between"}
                  align={isSmallscreen ? "start" : "center"}
                // gap={isSmallscreen ? 20 : 0}
                >
                  <Image
                    src={image5}
                    h={isSmallscreen ? 100 : 162}
                    w={isSmallscreen ? 70 : 103}
                  />

                  <Stack mt={isSmallscreen ? 50 : 0} gap={13}>
                    <Flex justify="center" align="center" gap={8}>
                      <Image
                        src={image4}
                        bg={"transparent"}
                        w={isSmallscreen ? 20 : 40}
                        h={isSmallscreen ? 15 : 30}
                      />
                      <Title ta="center" fz={isSmallscreen ? 21 : 45} fw={isSmallscreen ? 700 : 600}>
                        UPCOMING <span style={{ color: "#eb4d0d" }}>PUJA</span>
                      </Title>
                      <Image
                        src={image4}
                        w={isSmallscreen ? 20 : 40}
                        h={isSmallscreen ? 15 : 30}
                      />
                    </Flex>

                    <Box>
                      <Text
                        fw={600}
                        fz={isSmallscreen ? 12 : 18}
                        ta="center"
                        c={"grey"}
                      >
                        Book Pujas in your and your family's name at renowned
                        temples in India.
                      </Text>
                      <Text
                        fw={600}
                        fz={isSmallscreen ? 12 : 18}
                        ta="center"
                        c={"grey"}
                      >
                        Receive divine blessings along with a special video of
                        the sacred rituals.
                      </Text>
                    </Box>
                  </Stack>

                  <Image
                    src={image6}
                    h={isSmallscreen ? 100 : 162}
                    w={isSmallscreen ? 70 : 103}
                 
                  />
                </Flex>
              </Card>
            </Flex>

            <SimpleGrid
              cols={{
                xs: 1,
                sm: 2,
                md: 2,
                lg: 3,
                xl: 3,
              }}
              spacing={20}
              px={isSmallscreen ? 15 : 30}
              mb={20}
            >
              <Card bg={"#fcede7"} h={470} radius={20}>
                <BackgroundImage
                  src={image9}
                  radius={12}
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    objectFit: "cover",
                  }}
                />
                <Text ta={"center"} pt={15} c={"#f17c4d"} fz={14}>
                  SHiv power for cancer zodiac strength
                </Text>
                <Stack gap={10}>
                  <Title order={5} fw={600} c={"dark"} pt={14}>
                    Cancer Sun Sign Shiv Puja to Unleash Protection and Inner
                    Strength
                  </Title>
                  <Text fz={14} c={"#6f737a"}>
                    Elevate your cancerian energy with shiva’s blessing
                  </Text>

                  <Box>
                    <Flex gap={10} align={"center"} mb={13}>
                      <Image src={image7} h={20} w={20} />
                      <Text fz={14} c={"#f17c4d"}>
                        uttar pardesh mal Mumbai pishach{" "}
                      </Text>
                    </Flex>

                    <Flex gap={10} align={"center"}>
                      <Image src={image8} h={20} w={20} />
                      <Text fz={14} c={"#f17c4d"}>
                        uttar pardesh mal Mumbai pishach{" "}
                      </Text>
                    </Flex>
                  </Box>

                  <Button
                    bg={"#e04307"}
                    h={38}
                    radius={30}
                    mt={15}
                    onClick={() => navigate("/puja-process")}
                  >
                    + Participate{" "}
                  </Button>
                </Stack>
              </Card>

              <Card bg={"#fcede7"} h={470} radius={20}>
                <BackgroundImage
                  src={image9}
                  radius={12}
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    objectFit: "cover",
                  }}
                />
                <Text ta={"center"} pt={15} c={"#f17c4d"} fz={14}>
                  SHiv power for cancer zodiac strength
                </Text>
                <Stack gap={10}>
                  <Title order={5} fw={600} c={"dark"} pt={14}>
                    Cancer Sun Sign Shiv Puja to Unleash Protection and Inner
                    Strength
                  </Title>
                  <Text fz={14} c={"#6f737a"}>
                    Elevate your cancerian energy with shiva’s blessing
                  </Text>

                  <Box>
                    <Flex gap={10} align={"center"} mb={13}>
                      <Image src={image7} h={20} w={20} />
                      <Text fz={14} c={"#f17c4d"}>
                        uttar pardesh mal Mumbai pishach{" "}
                      </Text>
                    </Flex>

                    <Flex gap={10} align={"center"}>
                      <Image src={image8} h={20} w={20} />
                      <Text fz={14} c={"#f17c4d"}>
                        uttar pardesh mal Mumbai pishach{" "}
                      </Text>
                    </Flex>
                  </Box>

                  <Button
                    bg={"#e04307"}
                    h={38}
                    radius={30}
                    mt={15}
                    onClick={() => navigate("/puja-process")}
                  >
                    + Participate{" "}
                  </Button>
                </Stack>
              </Card>
              <Card bg={"#fcede7"} h={470} radius={20}>
                <BackgroundImage
                  src={image9}
                  radius={12}
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    objectFit: "cover",
                  }}
                />
                <Text ta={"center"} pt={15} c={"#f17c4d"} fz={14}>
                  SHiv power for cancer zodiac strength
                </Text>
                <Stack gap={10}>
                  <Title order={5} fw={600} c={"dark"} pt={14}>
                    Cancer Sun Sign Shiv Puja to Unleash Protection and Inner
                    Strength
                  </Title>
                  <Text fz={14} c={"#6f737a"}>
                    Elevate your cancerian energy with shiva’s blessing
                  </Text>

                  <Box>
                    <Flex gap={10} align={"center"} mb={13}>
                      <Image src={image7} h={20} w={20} />
                      <Text fz={14} c={"#f17c4d"}>
                        uttar pardesh mal Mumbai pishach{" "}
                      </Text>
                    </Flex>

                    <Flex gap={10} align={"center"}>
                      <Image src={image8} h={20} w={20} />
                      <Text fz={14} c={"#f17c4d"}>
                        uttar pardesh mal Mumbai pishach{" "}
                      </Text>
                    </Flex>
                  </Box>

                  <Button
                    bg={"#e04307"}
                    h={38}
                    radius={30}
                    mt={15}
                    onClick={() => navigate("/puja-process")}
                  >
                    + Participate{" "}
                  </Button>
                </Stack>
              </Card>
            </SimpleGrid>
          </Box>

          <Box>
            <Card
              bg={"#fcede7"}
              py={{ base: 40, md: 80 }}
              radius={0}
              shadow="none"
            >
              <Flex justify={"center"} align={"center"} gap={8} bg={"#fcede7"}>
                <Image
                  src={image1}
                  w={isSmallscreen ? 20 : 40}
                  h={isSmallscreen ? 15 : 30}
                  bg={"#fcede7"}
                />
                <Title
                  c={"#ED561A"}
                  fz={isSmallscreen ? 17 : 40}
                  fw={700}
                  ta={{ base: "center", md: "start" }}
                >
                  Subscribe to OmVaikuntha
                </Title>
                <Image
                  src={image1}
                  w={isSmallscreen ? 20 : 40}
                  h={isSmallscreen ? 15 : 30}
                />
              </Flex>
              <Flex justify={"center"}>
                <Text
                  ta={"center"}
                  w={{ base: "100%", md: "60%" }}
                  c={"#909090"}
                  mt={10}
                  fw={400}
                  fz={isSmallscreen ? 12 : 20}
                >
                  In case, you are interested to receive notifications on
                  WhatsApp for Daily Darshan, LIVE Pujas and Abhimantrit Divine
                  Products, you can choose to subscribe to DevDham WhatsApp here
                </Text>
              </Flex>

              <Flex justify={"center"} mt={isSmallscreen ? 30 : 50}>
                <Button
                  bg={"#ED561A"}
                  w={310}
                  h={55}
                  radius={8}
                  leftSection={<Image src={image2} h={30} w={30} mr={8} />}
                >
                  Join our whatsapp channel
                </Button>
              </Flex>
            </Card>

            <Card
              pt={80}
              px={50}
              radius={0}
              // py={40}
              style={{
                backgroundColor: "#FF6F00",
                color: "white",
              }}
            >
              <Flex
                align="flex-start"
                mb="xl"
                style={{
                  flexWrap: "wrap",
                }}
              >
                <Stack
                  gap="xs"
                  style={{ flexBasis: "200px", flexGrow: 2, minWidth: "180px" }}
                >
                  <Text size="lg" fw={700}>
                    Logo
                  </Text>
                  <Text size="sm" style={{ lineHeight: 2 }} w={"90%"}>
                    The proper Footer on proper time can preserve you
                    protection. We assist you make sureeverybody forward.
                  </Text>
                </Stack>

                <Stack
                  gap="xs"
                  style={{
                    flexGrow: 1,
                    color: "white",
                  }}
                >
                  <Text size="lg" fw={700}>
                    Quick Link
                  </Text>
                  <Text
                    size="xs"
                    style={{
                      textDecoration: "underline",
                      textDecorationColor: "#FFD700",
                    }}
                  ></Text>{" "}
                  <Anchor
                    color="white"
                    c={"white"}
                    size="sm"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none",
                    }}
                  >
                    <CheckIcon size={14} style={{ marginRight: 4 }} /> Home
                  </Anchor>
                  <Anchor
                    color="white"
                    c={"white"}
                    size="sm"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none",
                    }}
                  >
                    <CheckIcon size={14} style={{ marginRight: 4 }} /> Puja
                  </Anchor>
                  <Anchor
                    color="white"
                    c={"white"}
                    size="sm"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none",
                    }}
                  >
                    <CheckIcon size={14} style={{ marginRight: 4 }} /> Blogs
                  </Anchor>
                  <Anchor
                    color="white"
                    c={"white"}
                    size="sm"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none",
                    }}
                  >
                    About Us
                  </Anchor>
                </Stack>

                <Stack
                  gap={25}
                  style={{
                    flexGrow: 1,
                    color: "white",
                  }}
                >
                  <Text size="lg" fw={700}>
                    Contact Us
                  </Text>
                  <Group gap="xs">
                    <IconPhone />
                    <Text size="sm">45465636566</Text>
                  </Group>
                  <Group gap="xs">
                    <IconBrandMail />
                    <Text size="sm">GYAN.A4@gmail.com</Text>
                  </Group>
                  <Group gap="xs">
                    <IconBrandMap />
                    <Text size="sm">2972 Westheimer India Ana,</Text>
                  </Group>
                </Stack>

                <Stack
                  gap={25}
                  fw="sm"
                  style={{ flexBasis: "200px", flexGrow: 2, minWidth: "180px" }}
                >
                  <Text size="lg" fw={700}>
                    Company office
                  </Text>
                  <Text size="sm">F205 Road no 12 Banjara Road Hyderabad</Text>
                  <Text size="sm">CIN : U43948959372</Text>
                </Stack>

                <Stack gap={60} align="flex-start" style={{ flexGrow: 1 }}>
                  <Text size="lg" fw={700}>
                    Follow Us
                  </Text>
                  <Group gap="md">
                    <ActionIcon
                      variant="filled"
                      size="lg"
                      radius="xl"
                      color="white"
                      style={{ backgroundColor: "#fff", color: "#FF6F00" }}
                    >
                      <IconBrandFacebook />
                    </ActionIcon>
                    <ActionIcon
                      variant="filled"
                      size="lg"
                      radius="xl"
                      color="white"
                      style={{ backgroundColor: "#fff", color: "#FF6F00" }}
                    >
                      <IconBrandTwitter />
                    </ActionIcon>
                    <ActionIcon
                      variant="filled"
                      size="lg"
                      radius="xl"
                      color="white"
                      style={{ backgroundColor: "#fff", color: "#FF6F00" }}
                    >
                      <IconBrandFacebook />
                    </ActionIcon>
                  </Group>
                </Stack>
              </Flex>

              <Text size="sm" mt="xl" mb={15} ta={"center"}>
                © 2025 All rights reserved
              </Text>
            </Card>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default ThanYou;
