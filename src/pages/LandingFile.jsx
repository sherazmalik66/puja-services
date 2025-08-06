import {
  Button,
  Card,
  Flex,
  Stack,
  Container,
  Title,
  Image,
  Text,
  Box,
  BackgroundImage,
  SimpleGrid,
  Avatar,
  Rating,
  CheckIcon,
  ActionIcon,
  Anchor,
  Group,
  Badge,
} from "@mantine/core";
import image1 from "../images/images-2.png";
import image3 from "../images/Group-2.png";
import image4 from "../images/Group-3.png";
import image6 from "../images/image-3.png";
import image7 from "../images/icon.png";
import image8 from "../images/calendar_month.png";
import image9 from "../images/Group-4.png";
import image10 from "../images/Group-5.png";
import image12 from "../images/Group-6.png";
import image13 from "../images/Trident Emblem.webp";
import image14 from "../images/image-5.png";
import image15 from "../images/image-11.png";
import IconBrandFacebook from "./iconFacebook";
import IconPhone from "./iconPhone";
import IconBrandTwitter from "./iconTwitter";
import IconBrandMap from "./iconMap";
import IconBrandMail from "./iconMail";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import Navbar from "./Navbar";

function LandingFile() {
  const isSmallscreen = useMediaQuery("(max-width: 56.25em)");
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <Container fluid p={0}>
        <Stack gap={15}>
          <Box>
            <Card
              bg="transparent"
              shadow="none"
              radius={0}
              p={isSmallscreen ? 0 : 20}
            >
              <Card bg="transparent" w="100%" shadow="none">
                <Flex gap={10} direction={{ base: "column", md: "row" }}>
                  <Card
                    w={isSmallscreen ? "100%" : "60%"}
                    bg="transparent"
                    shadow="none"
                    p={{ base: 4, md: 30 }}
                  >
                    <Stack gap={25}>
                      <Stack gap={isSmallscreen ? 20 : 40}>
                        <Flex justify={isSmallscreen ? "center" : "start"}>
                          <Title
                            c="black"
                            ta={isSmallscreen ? "center" : "start"}
                            fw={isSmallscreen ? 600 : 600}
                            fz={{ base: 21, md: 38 }}
                            w={isSmallscreen ? "100%" : "93%"}
                          >
                            <span style={{ color: "#eb4d0d" }}>
                              OmVaikuntha,{" "}
                            </span>{" "}
                            a Devotional Platform connecting Devotees with
                            <span style={{ color: "#eb4d0d" }}>
                              {" "}
                              Temples
                            </span>{" "}
                            and
                            <span style={{ color: "#eb4d0d" }}>
                              {" "}
                              Tirth Kshetras
                            </span>
                          </Title>
                        </Flex>
                        <Text
                          fw={600}
                          fz={{ base: 12, md: 16 }}
                          c="gray"
                          w={{ base: "100%", md: "75%" }}
                          ta={{ base: "center", md: "start" }}
                        >
                          Watch Daily Darshan, Participate in LIVE Pujas, Bring
                          Home Prasad and Abhimantrit Divine Products
                        </Text>
                      </Stack>

                      <Flex gap={10}>
                        <Badge
                          leftSection={
                            <Image
                              src={image7}
                              h={isSmallscreen ? 13 : 20}
                              w={isSmallscreen ? 13 : 20}
                            />
                          }
                          h={isSmallscreen ? 40 : 46}
                          w={{ base: "45%", sm: 206 }}
                          radius={6}
                          fz={isSmallscreen ? 10 : 14}
                          c="dark"
                          bg="#fdeee8"
                          style={{ border: "1px solid #f17c4e" }}
                        >
                          1 Lakh+ Devotees
                        </Badge>

                        <Badge
                          h={isSmallscreen ? 40 : 46}
                          w={isSmallscreen ? "60%" : "280px"}
                          radius={6}
                          fz={isSmallscreen ? 10 : 14}
                          c="dark"
                          bg="#fdeee8"
                          leftSection={
                            <Image
                              src={image8}
                              h={isSmallscreen ? 13 : 20}
                              w={isSmallscreen ? 13 : 20}
                            />
                          }
                          style={{ border: "1px solid #f17c4e" }}
                        >
                          Authentic temple Parsad
                        </Badge>
                      </Flex>
                    </Stack>
                  </Card>

                  <Card
                    w={isSmallscreen ? "100%" : "40%"}
                    bg="transparent"
                    shadow="none"
                    display={isSmallscreen ? "none" : "block"}
                  >
                    <Image src={image1} width="100%" height="auto" />
                  </Card>
                </Flex>
              </Card>
            </Card>

            <Card bg="#e04307" radius={0} py={10} mt={8}>
              <Box style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
                <Box
                  style={{
                    display: "inline-block",
                    paddingLeft: "100%",
                    animation: "scrollText 120s linear infinite",
                  }}
                >
                  <Flex
                    gap={30}
                    align="center"
                    wrap="nowrap"
                    style={{ display: "inline-flex" }}
                  >
                    {Array.from({ length: 12 }).map((_, index) => (
                      <Flex key={index} gap={10} align="center">
                        <Text c="white" fw={600}>
                          🛕 Perform powerful Pujas and Chadawas in Ancient
                          Temples Without Leaving your home.
                        </Text>

                        <Text c={"white"} fw={600}>
                          🌸 Authentic Puja Seva, Vedic rituals, and Sankalp by
                          temple priests – Only at OmVaikuntha.
                        </Text>
                      </Flex>
                    ))}
                  </Flex>
                </Box>
              </Box>

              <style>
                {`
                   @keyframes scrollText {
                   0% { transform: translateX(0%); }
                   100% { transform: translateX(-100%); }
                 }
                  `}
              </style>
            </Card>
          </Box>

          {/* ////////////////////// */}

          <Flex justify="center">
            <Card
              w="100%"
              px={isSmallscreen ? 10 : 70}
              radius={0}
              bg="transparent"
              shadow="none"
            >
              <Flex
                justify={isSmallscreen ? "space-between" : "space-between"}
                align={isSmallscreen ? "start" : "center"}
                gap={isSmallscreen ? 0 : 0}
              >
                <Image
                  src={image3}
                  h={isSmallscreen ? 100 : 162}
                  w={isSmallscreen ? 70 : 103}
                />

                <Stack mt={isSmallscreen ? 10 : 0} gap={13}>
                  <Flex justify="center" align="center" gap={8}>
                    <Image
                      src={image13}
                      bg={"transparent"}
                      w={isSmallscreen ? 20 : 40}
                      h={isSmallscreen ? 15 : 30}
                    />
                    <Title ta="center" fz={isSmallscreen ? 24 : 45} fw={600}>
                      UPCOMING <span style={{ color: "#eb4d0d" }}>PUJA</span>
                    </Title>
                    <Image
                      src={image13}
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
                      temples in India Receive divine blessings along with a
                      special video of the sacred rituals.
                    </Text>
                  </Box>
                </Stack>

                <Image
                  src={image4}
                  h={isSmallscreen ? 100 : 162}
                  w={isSmallscreen ? 70 : 103}
                />
              </Flex>
            </Card>
          </Flex>

          {/* //////////////////////// */}

          <Box>
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
                  src={image6}
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
                  src={image6}
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
                  src={image6}
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

            <Flex justify="center">
              <Card
                w="100%"
                px={isSmallscreen ? 10 : 20}
                radius={0}
                p={0}
                bg="transparent"
                shadow="none"
              >
                <Flex
                  justify={isSmallscreen ? "flex-start" : "space-between"}
                  align={isSmallscreen ? "start" : "center"}
                >
                  <Image
                    src={image9}
                    h={isSmallscreen ? 100 : 250}
                    w={isSmallscreen ? 70 : 262}
                  />

                  <Stack mt={isSmallscreen ? 30 : 0} gap={12}>
                    <Flex justify="center" align="center" gap={5}>
                      <Image
                        src={image13}
                        bg={"transparent"}
                        w={isSmallscreen ? 20 : 40}
                        h={isSmallscreen ? 15 : 30}
                      />
                      <Title ta="center" fz={isSmallscreen ? 20 : 45} fw={600}>
                        REVIEWS<span style={{ color: "#eb4d0d" }}> & </span>{" "}
                        RATINGS
                      </Title>
                      <Image
                        src={image13}
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
                        temples in India. Receive divine blessings along with a
                        special video of the sacred rituals.
                      </Text>
                    </Box>
                  </Stack>

                  <Image
                    src={image10}
                    h={isSmallscreen ? 100 : 250}
                    w={isSmallscreen ? 70 : 262}
                    // style={{ alignSelf: "center" }}
                  />
                </Flex>
              </Card>
            </Flex>
          </Box>

          <Box>
            <Flex justify={"center"} w={"100%"} px={15}>
              {isSmallscreen ? (
                <Carousel
                  withIndicators
                  height="auto"
                  slideSize="100%"
                  slideGap="md"
                  plugins={[Autoplay({ delay: 3000 })]}
                  styles={{ indicator: { backgroundColor: "#1c55e0" } }}
                >
                  {[...Array(4)].map((_, index) => (
                    <Carousel.Slide key={index}>
                      <SimpleGrid
                        cols={{
                          xs: 1,
                          sm: 2,
                          md: 2,
                          lg: 3,
                          xl: 3,
                        }}
                        w={{ base: "100%", md: "90%" }}
                        bg={"#f3f3f3"}
                        py={{ base: "50px", md: "70px" }}
                        px={{ base: "30px", md: "40px" }}
                        style={{ borderRadius: 20 }}
                      >
                        <Card radius={20} shadow="none" p={0}>
                          <Stack px={20} py={20}>
                            <Flex gap={12} align={"center"} h={"100%"}>
                              <Rating
                                size="sm"
                                color="#1c55e0"
                                value={4}
                                readOnly
                              />
                              <Text fw={600}>4/5</Text>
                            </Flex>

                            <Text fz={isSmallscreen ? 14 : 16}>
                              The team took time to understand our vision and
                              delivered a sleek, professional site that not only
                              looks great but also improved our conversion
                              rates. Their design process was smooth,
                              communication was clear, and they met all
                              deadlines. We’ve received numerous compliments on
                              the new site, and it’s easier for customers to
                              navigate.
                            </Text>
                          </Stack>

                          <Box
                            bg="#f97316"
                            p="md"
                            style={{
                              radius: "20px",
                              display: "flex",
                              alignItems: "center",
                              gap: 12,
                              color: "white",
                              borderTopLeftRadius: 40,
                              borderBottomLeftRadius: 20,
                              borderBottomRightRadius: 20,
                              borderTopRightRadius: 0,
                              position: "relative",
                              minHeight: 104,
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: 100,
                                right: 20,
                                width: 40,
                                height: 0,
                                borderBottomLeftRadius: 50,
                                zIndex: 1,
                              }}
                            ></div>

                            <div
                              style={{
                                position: "absolute",
                                top: -25,
                                right: 0,
                                width: 7,
                                height: 60,
                                backgroundColor: "#f97316",
                                borderBottomLeftRadius: 50,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 20,
                                zIndex: 2,
                              }}
                            ></div>

                            <Avatar
                              src="https://randomuser.me/api/portraits/women/75.jpg"
                              alt="avatar"
                              radius="xl"
                              style={{ zIndex: 3 }}
                            />
                            <div style={{ zIndex: 3 }}>
                              <Text fw={600}>Maxin Will</Text>
                              <Text size="xs" color="white" opacity={0.8}>
                                Marriage Puja
                              </Text>
                            </div>
                          </Box>
                        </Card>
                      </SimpleGrid>
                    </Carousel.Slide>
                  ))}
                </Carousel>
              ) : (
                <SimpleGrid
                  cols={{
                    xs: 1,
                    sm: 2,
                    md: 2,
                    lg: 3,
                    xl: 3,
                  }}
                  w={{ base: "100%", md: "90%" }}
                  bg={"#f3f3f3"}
                  py={{ base: "50px", md: "70px" }}
                  px={{ base: "30px", md: "40px" }}
                  style={{ borderRadius: 20 }}
                >
                  <Card
                    radius={20}
                    shadow="none"
                    p={0}
                    display={isSmallscreen ? "none" : "block"}
                  >
                    <Stack px={20} py={20}>
                      <Flex gap={12} align={"center"} h={"100%"}>
                        <Rating size="sm" color="#1c55e0" value={4} readOnly />
                        <Text fw={600}>4/5</Text>
                      </Flex>

                      <Text fz={isSmallscreen ? 12 : 16}>
                        The team took time to understand our vision and
                        delivered a sleek, professional site that not only looks
                        great but also improved our conversion rates. Their
                        design process was smooth, communication was clear, and
                        they met all deadlines. We’ve received numerous
                        compliments on the new site, and it’s easier for
                        customers to navigate.
                      </Text>
                    </Stack>

                    <Box
                      bg="#f97316"
                      p="md"
                      style={{
                        radius: "20px",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        color: "white",
                        borderTopLeftRadius: 40,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopRightRadius: 0,
                        position: "relative",
                        minHeight: 104,
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 100,
                          right: 20,
                          width: 40,
                          height: 0,
                          borderBottomLeftRadius: 50,
                          zIndex: 1,
                        }}
                      ></div>

                      <div
                        style={{
                          position: "absolute",
                          top: -25,
                          right: 0,
                          width: 7,
                          height: 60,
                          backgroundColor: "#f97316",
                          borderBottomLeftRadius: 50,
                          borderBottomRightRadius: 0,
                          borderTopLeftRadius: 20,
                          zIndex: 2,
                        }}
                      ></div>

                      <Avatar
                        src="https://randomuser.me/api/portraits/women/75.jpg"
                        alt="avatar"
                        radius="xl"
                        style={{ zIndex: 3 }}
                      />
                      <div style={{ zIndex: 3 }}>
                        <Text fw={600}>Maxin Will</Text>
                        <Text size="xs" color="white" opacity={0.8}>
                          Marriage Puja
                        </Text>
                      </div>
                    </Box>
                  </Card>

                  <Card
                    radius={20}
                    shadow="none"
                    p={0}
                    display={isSmallscreen ? "none" : "block"}
                  >
                    <Stack px={20} py={20}>
                      <Flex gap={12} align={"center"} h={"100%"}>
                        <Rating size="sm" color="#1c55e0" value={4} readOnly />
                        <Text fw={600}>4/5</Text>
                      </Flex>

                      <Text fz={isSmallscreen ? 12 : 16}>
                        The team took time to understand our vision and
                        delivered a sleek, professional site that not only looks
                        great but also improved our conversion rates. Their
                        design process was smooth, communication was clear, and
                        they met all deadlines. We’ve received numerous
                        compliments on the new site, and it’s easier for
                        customers to navigate.
                      </Text>
                    </Stack>

                    <Box
                      bg="#f97316"
                      p="md"
                      style={{
                        radius: "20px",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        color: "white",
                        borderTopLeftRadius: 40,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopRightRadius: 0,
                        position: "relative",
                        minHeight: 104,
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 100,
                          right: 20,
                          width: 40,
                          height: 0,
                          borderBottomLeftRadius: 50,
                          zIndex: 1,
                        }}
                      ></div>

                      <div
                        style={{
                          position: "absolute",
                          top: -25,
                          right: 0,
                          width: 7,
                          height: 60,
                          backgroundColor: "#f97316",
                          borderBottomLeftRadius: 50,
                          borderBottomRightRadius: 0,
                          borderTopLeftRadius: 20,
                          zIndex: 2,
                        }}
                      ></div>

                      <Avatar
                        src="https://randomuser.me/api/portraits/women/75.jpg"
                        alt="avatar"
                        radius="xl"
                        style={{ zIndex: 3 }}
                      />
                      <div style={{ zIndex: 3 }}>
                        <Text fw={600}>Maxin Will</Text>
                        <Text size="xs" color="white" opacity={0.8}>
                          Marriage Puja
                        </Text>
                      </div>
                    </Box>
                  </Card>

                  <Card radius={20} shadow="none" p={0}>
                    <Stack px={20} py={20}>
                      <Flex gap={12} align={"center"} h={"100%"}>
                        <Rating size="sm" color="#1c55e0" value={4} readOnly />
                        <Text fw={600}>4/5</Text>
                      </Flex>

                      <Text fz={isSmallscreen ? 12 : 16}>
                        The team took time to understand our vision and
                        delivered a sleek, professional site that not only looks
                        great but also improved our conversion rates. Their
                        design process was smooth, communication was clear, and
                        they met all deadlines. We’ve received numerous
                        compliments on the new site, and it’s easier for
                        customers to navigate.
                      </Text>
                    </Stack>

                    <Box
                      bg="#f97316"
                      p="md"
                      style={{
                        radius: "20px",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        color: "white",
                        borderTopLeftRadius: 40,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopRightRadius: 0,
                        position: "relative",
                        minHeight: 104,
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 100,
                          right: 20,
                          width: 40,
                          height: 0,
                          borderBottomLeftRadius: 50,
                          zIndex: 1,
                        }}
                      ></div>

                      <div
                        style={{
                          position: "absolute",
                          top: -25,
                          right: 0,
                          width: 7,
                          height: 60,
                          backgroundColor: "#f97316",
                          borderBottomLeftRadius: 50,
                          borderBottomRightRadius: 0,
                          borderTopLeftRadius: 20,
                          zIndex: 2,
                        }}
                      ></div>

                      <Avatar
                        src="https://randomuser.me/api/portraits/women/75.jpg"
                        alt="avatar"
                        radius="xl"
                        style={{ zIndex: 3 }}
                      />
                      <div style={{ zIndex: 3 }}>
                        <Text fw={600}>Maxin Will</Text>
                        <Text size="xs" color="white" opacity={0.8}>
                          Marriage Puja
                        </Text>
                      </div>
                    </Box>
                  </Card>
                </SimpleGrid>
              )}
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
                    src={image12}
                    h={isSmallscreen ? 100 : 182}
                    w={isSmallscreen ? 70 : 160}
                  />

                  <Stack mt={isSmallscreen ? 10 : 0} gap={13}>
                    <Flex justify="center" align="center" gap={5}>
                      <Image
                        src={image13}
                        bg={"transparent"}
                        w={isSmallscreen ? 20 : 40}
                        h={isSmallscreen ? 15 : 30}
                      />
                      <Title ta="center" fz={isSmallscreen ? 20 : 45} fw={800}>
                        LATEST <span style={{ color: "#eb4d0d" }}>PUJA</span>{" "}
                        POST
                      </Title>
                      <Image
                        src={image13}
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
                    src={image12}
                    h={isSmallscreen ? 100 : 182}
                    w={isSmallscreen ? 70 : 160}
                  />
                </Flex>
              </Card>
            </Flex>
          </Box>

          <Flex>
            {isSmallscreen ? (
              <Carousel
                withIndicators
                height="auto"
                slideSize="100%"
                slideGap="md"
                plugins={[Autoplay({ delay: 3000 })]}
                styles={{ indicator: { backgroundColor: "#1c55e0" } }}
              >
                {[...Array(4)].map((_, index) => (
                  <Carousel.Slide key={index}>
                    <SimpleGrid
                      cols={{
                        xs: 1,
                        sm: 2,
                        md: 2,
                        lg: 3,
                        xl: 3,
                      }}
                      spacing={20}
                      px={{ base: 10, md: 50 }}
                      mb={20}
                    >
                      <Card
                        withBorder
                        p={0}
                        radius={20}
                        shadow="none"
                        mb={15}
                        style={{ border: "2px solid #d9d9d9" }}
                      >
                        <BackgroundImage
                          src={image14}
                          h={230}
                          radius={12}
                          style={{
                            width: "100%",
                            height: "300%",
                            overflow: "hidden",
                            objectFit: "cover",
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                          }}
                        />
                        <Text pt={15} c={"#f17c4d"} fz={14} pl={25}>
                          12-10-2002
                        </Text>
                        <Stack gap={10} px={25}>
                          <Title order={6} fw={600} c={"dark"} pt={14}>
                            How To Remove Tanning From The Body? 3 Pro Ways That
                            Always Work
                          </Title>
                          <Text fz={18} c={"dark"}>
                            By Gayyan Bhai
                          </Text>
                          <Text fz={14} c={"#6f737a"}>
                            Luckily, tanning is not an untreatable concern. So,
                            if your skin is prone to tanning, scroll ahead for 3
                            tested ways to remove it effectively.
                          </Text>

                          <Button
                            bg={"transparent"}
                            mb={15}
                            h={46}
                            radius={30}
                            mt={15}
                            c={"#e04307"}
                            style={{ border: "1px solid #e04307" }}
                          >
                            Read More
                          </Button>
                        </Stack>
                      </Card>
                    </SimpleGrid>
                  </Carousel.Slide>
                ))}
              </Carousel>
            ) : (
              <SimpleGrid
                cols={{
                  xs: 1,
                  sm: 2,
                  md: 2,
                  lg: 3,
                  xl: 3,
                }}
                spacing={20}
                px={{ base: 10, md: 50 }}
                mb={20}
              >
                <Card
                  withBorder
                  p={0}
                  radius={20}
                  display={isSmallscreen ? "none" : "block"}
                  shadow="none"
                  style={{ border: "2px solid #d9d9d9" }}
                >
                  <BackgroundImage
                    src={image14}
                    h={230}
                    radius={12}
                    style={{
                      width: "100%",
                      height: "300%",
                      overflow: "hidden",
                      objectFit: "cover",
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                  <Text pt={15} c={"#f17c4d"} fz={14} pl={25}>
                    12-10-2002
                  </Text>
                  <Stack gap={10} px={25}>
                    <Title order={6} fw={600} c={"dark"} pt={14}>
                      How To Remove Tanning From The Body? 3 Pro Ways That
                      Always Work
                    </Title>
                    <Text fz={18} c={"dark"}>
                      By Gayyan Bhai
                    </Text>
                    <Text fz={14} c={"#6f737a"}>
                      Luckily, tanning is not an untreatable concern. So, if
                      your skin is prone to tanning, scroll ahead for 3 tested
                      ways to remove it effectively.
                    </Text>

                    <Button
                      bg={"transparent"}
                      mb={15}
                      h={46}
                      radius={30}
                      mt={15}
                      c={"#e04307"}
                      style={{ border: "1px solid #e04307" }}
                    >
                      Read More
                    </Button>
                  </Stack>
                </Card>

                <Card
                  withBorder
                  p={0}
                  radius={20}
                  display={isSmallscreen ? "none" : "block"}
                  shadow="none"
                  style={{ border: "2px solid #d9d9d9" }}
                >
                  <BackgroundImage
                    src={image14}
                    h={230}
                    radius={12}
                    style={{
                      width: "100%",
                      height: "300%",
                      overflow: "hidden",
                      objectFit: "cover",
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                  <Text pt={15} c={"#f17c4d"} fz={14} pl={25}>
                    12-10-2002
                  </Text>
                  <Stack gap={10} px={25}>
                    <Title order={6} fw={600} c={"dark"} pt={14}>
                      How To Remove Tanning From The Body? 3 Pro Ways That
                      Always Work
                    </Title>
                    <Text fz={18} c={"dark"}>
                      By Gayyan Bhai
                    </Text>
                    <Text fz={14} c={"#6f737a"}>
                      Luckily, tanning is not an untreatable concern. So, if
                      your skin is prone to tanning, scroll ahead for 3 tested
                      ways to remove it effectively.
                    </Text>

                    <Button
                      bg={"transparent"}
                      mb={15}
                      h={46}
                      radius={30}
                      mt={15}
                      c={"#e04307"}
                      style={{ border: "1px solid #e04307" }}
                    >
                      Read More
                    </Button>
                  </Stack>
                </Card>

                <Card
                  withBorder
                  p={0}
                  radius={20}
                  shadow="none"
                  style={{ border: "2px solid #d9d9d9" }}
                >
                  <BackgroundImage
                    src={image14}
                    h={230}
                    radius={12}
                    style={{
                      width: "100%",
                      height: "300%",
                      overflow: "hidden",
                      objectFit: "cover",
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                  <Text pt={15} c={"#f17c4d"} fz={14} pl={25}>
                    12-10-2002
                  </Text>
                  <Stack gap={10} px={25}>
                    <Title order={6} fw={600} c={"dark"} pt={14}>
                      How To Remove Tanning From The Body? 3 Pro Ways That
                      Always Work
                    </Title>
                    <Text fz={18} c={"dark"}>
                      By Gayyan Bhai
                    </Text>
                    <Text fz={14} c={"#6f737a"}>
                      Luckily, tanning is not an untreatable concern. So, if
                      your skin is prone to tanning, scroll ahead for 3 tested
                      ways to remove it effectively.
                    </Text>

                    <Button
                      bg={"transparent"}
                      mb={15}
                      h={46}
                      radius={30}
                      mt={15}
                      c={"#e04307"}
                      style={{ border: "1px solid #e04307" }}
                    >
                      Read More
                    </Button>
                  </Stack>
                </Card>
              </SimpleGrid>
            )}
          </Flex>

          <Box>
            <Card
              bg={"#fcede7"}
              shadow="none"
              py={{ base: 40, md: 80 }}
              radius={0}
            >
              <Flex justify={"center"} align={"center"} gap={8} bg={"#fcede7"}>
                <Image
                  src={image13}
                  w={isSmallscreen ? 20 : 40}
                  h={isSmallscreen ? 15 : 30}
                  bg={"#fcede7"}
                />
                <Title
                  c={"#ED561A"}
                  fz={isSmallscreen ? 16 : 40}
                  fw={isSmallscreen ? 700 : 600}
                  ta={{ base: "center", md: "start" }}
                >
                  Subscribe to OmVaikuntha
                </Title>
                <Image
                  src={image13}
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
                  leftSection={<Image src={image15} h={30} w={30} mr={8} />}
                >
                  Join our whatsapp channel
                </Button>
              </Flex>
            </Card>

            <Card
              pt={80}
              shadow="none"
              radius={0}
              px={isSmallscreen ? 20 : 50}
              style={{
                backgroundColor: "#FF6F00",
                color: "white",
              }}
            >
              <Flex
                align="flex-start"
                justify="center"
                wrap="wrap"
                rowGap={50}
                columnGap={30}
              >
                <Stack
                  gap="xs"
                  style={{ flexBasis: "200px", flexGrow: 1, minWidth: "180px" }}
                >
                  <Text size="lg" fw={700}>
                    Logo
                  </Text>
                  <Text size="sm" style={{ lineHeight: 2 }}>
                    The proper Footer on proper time can preserve you
                    protection. We assist you make sure everybody forward.
                  </Text>
                </Stack>

                <Stack gap="xs" style={{ flexGrow: 1 }}>
                  <Text size="lg" fw={700}>
                    Quick Link
                  </Text>
                  <Anchor
                    c="white"
                    size="sm"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <CheckIcon size={14} style={{ marginRight: 4 }} /> Home
                  </Anchor>
                  <Anchor
                    c="white"
                    size="sm"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <CheckIcon size={14} style={{ marginRight: 4 }} /> Puja
                  </Anchor>
                  <Anchor
                    c="white"
                    size="sm"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <CheckIcon size={14} style={{ marginRight: 4 }} /> Blogs
                  </Anchor>
                  <Anchor
                    c="white"
                    size="sm"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <CheckIcon size={14} style={{ marginRight: 4 }} /> About Us
                  </Anchor>
                </Stack>

                <Stack gap={20} style={{ flexGrow: 1 }}>
                  <Text size="lg" fw={700}>
                    Contact Us
                  </Text>
                  <Group gap="xs">
                    <IconPhone /> <Text size="sm">45465636566</Text>
                  </Group>
                  <Group gap="xs">
                    <IconBrandMail /> <Text size="sm">GYAN.A4@gmail.com</Text>
                  </Group>
                  <Group gap="xs">
                    <IconBrandMap />
                    <Text size="sm">2972 Westheimer India Ana</Text>
                  </Group>
                </Stack>

                <Stack
                  gap={15}
                  style={{ flexBasis: "200px", flexGrow: 1, minWidth: "180px" }}
                >
                  <Text size="lg" fw={700}>
                    Company Office
                  </Text>
                  <Text size="sm">F205 Road no 12 Banjara Road Hyderabad</Text>
                  <Text size="sm">CIN : U43948959372</Text>
                </Stack>

                <Stack display={{ base: "none", md: "block" }}>
                  <Text size="lg" fw={700}>
                    Follow Us
                  </Text>
                  <Group gap="md" mt={40}>
                    <ActionIcon
                      variant="filled"
                      size="lg"
                      radius="xl"
                      style={{ backgroundColor: "#fff", color: "#FF6F00" }}
                    >
                      <IconBrandFacebook />
                    </ActionIcon>
                    <ActionIcon
                      variant="filled"
                      size="lg"
                      radius="xl"
                      style={{ backgroundColor: "#fff", color: "#FF6F00" }}
                    >
                      <IconBrandTwitter />
                    </ActionIcon>
                    <ActionIcon
                      variant="filled"
                      size="lg"
                      radius="xl"
                      style={{ backgroundColor: "#fff", color: "#FF6F00" }}
                    >
                      <IconBrandFacebook />
                    </ActionIcon>
                  </Group>
                </Stack>
              </Flex>

              <Text size="sm" mt="xl" mb={15} ta="center">
                © 2025 All rights reserved
              </Text>
            </Card>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default LandingFile;
