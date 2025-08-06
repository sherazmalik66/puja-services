import {
  Anchor,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Image,
  Stack,
  Text,
  Title,
  Group,
  CheckIcon,
  SimpleGrid,
  Avatar,
  Badge,
  List,
  BackgroundImage,
  Radio,
  Rating,
  ActionIcon,
  Drawer,
} from "@mantine/core";
import image1 from "../images/image-1.png";
import image2 from "../images/Trident Emblem.webp";
import image3 from "../images/Ellipse-1.png";
import image4 from "../images/Ellipse-2.png";
import image5 from "../images/Ellipse-3.png";
import image6 from "../images/Ellipse-5.png";
import image7 from "../images/icon.png";
import image8 from "../images/calendar_month.png";
import image9 from "../images/image-9.png";
import image10 from "../images/Trident Emblem.webp";
import image11 from "../images/Group-11.png";
import image13 from "../images/Group-6.png";
import image14 from "../images/image-10.png";
import image15 from "../images/Group-13.png";
import image16 from "../images/image-8.png";
import image17 from "../images/image-14.png";
import image18 from "../images/Group-1.png";
import image19 from "../images/leak_add.png";
import image20 from "../images/image-11.png";
import image21 from "../images/image-13.jpg";
import image22 from "../images/mata Baglamukhi.jfif";
import image23 from "../images/BaglaMukhi.jfif";
import image24 from "../images/image-15.png";
import IconBrandMap from "./iconMap";
import IconBrandFacebook from "./iconFacebook";
import IconBrandMail from "./iconMail";
import IconPhone from "./iconPhone";
import IconBrandTwitter from "./iconTwitter";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import IconChervonDown from "./iconChervonDown";
import { useNavigate } from "react-router-dom";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import Navbar from "./Navbar";

function PujaProcess() {
  const isSmallscreen = useMediaQuery("(max-width: 56.25em)");
  const [opened, { close }] = useDisclosure(false);
const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const images = [image9, image21, image22, image23];

  const itemsData = [
    {
      id: 1,
      title: "Rahu Kunjika",
      price: 21,
      description:
        "Black sesame laddus, a black dhoti, black urad dal, and a silver serpent (chandi ka naag) will be offered in your name at the Omkareshwar ",
      image: image16,
    },
    {
      id: 2,
      title: "Rahu Kunjika",
      price: 21,
      description:
        "Black sesame laddus, a black dhoti, black urad dal, and a silver serpent (chandi ka naag) will be offered in your name at the Omkareshwar ",
      image: image16,
    },
    {
      id: 3,
      title: "Rahu Kunjika",
      price: 21,
      description:
        "Black sesame laddus, a black dhoti, black urad dal, and a silver serpent (chandi ka naag) will be offered in your name at the Omkareshwar Jyotirlinga temple. Additionally, a dog will be fed (swaan daan) as part of the ritual. According to the scriptures, these offerings appease Rahu Graha, remove obstacles, and bring clarity and balance in life",
      image: image16,
    },
    {
      id: 4,
      title: "Rahu Kunjika",
      price: 21,
      description:
        "Black sesame laddus, a black dhoti, black urad dal, and a silver serpent (chandi ka naag) will be offered in your name at the Omkareshwar Jyotirlinga temple. Additionally, a dog will be fed (swaan daan) as part of the ritual. According to the scriptures, these offerings appease Rahu Graha, remove obstacles, and bring clarity and balance in life",
      image: image16,
    },
  ];

  const [quantities, setQuantities] = useState({});

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

  const items = [
    {
      id: 1,
      price: 851,
      image: "your-image-url.png", 
    },
    {
      id: 2,
      price: 851,
      image: "your-image-url.png",
    },
    {
      id: 3,
      price: 851,
      image: "your-image-url.png",
    },
    {
      id: 4,
      price: 851,
      image: "your-image-url.png",
    },
  ];

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
            <Image src={image18} h={35} w={35} />
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

        {/* /////////////////// */}

        <Stack gap={isSmallscreen ? 15 : 10}>
          <Box>
            <Card
              radius={0}
              shadow="none"
              bg={"transparent"}
              mt={isSmallscreen ? 15 : 0}
              p={0}
              style={{
                borderBottom: isSmallscreen ? "none" : "1px solid #cfcfcf",
              }}
            >
              <Card
                bg={"transparent"}
                w={"100%"}
                shadow="none"
                p={isSmallscreen ? 0 : 20}
              >
                <Flex
                  direction={isSmallscreen ? "column" : "row"}
                  gap={isSmallscreen ? 30 : 0}
                >
                 
                  <Card
                    h={isSmallscreen ? 300 : 600}
                    p={isSmallscreen ? 0 : 20}
                    w={isSmallscreen ? "100%" : "65%"}
                    bg={"transparent"}
                    pb={0}
                    shadow="none"
                  >
                    <Carousel
                      bg={"transparent"}
                      withIndicators
                      height="auto"
                      slideGap="md"
                      plugins={[Autoplay({ delay: 3000 })]}
                    >
                      {images.map((imgSrc, i) => (
                        <Carousel.Slide key={i}>
                          <Image
                            src={imgSrc}
                            w="100%"
                            height={isSmallscreen ? "100%" : 500}
                            radius={15}
                            style={{ objectFit: "cover" }}
                          />
                        </Carousel.Slide>
                      ))}
                    </Carousel>
                  </Card>

              
                  <Card
               
                    p={isSmallscreen ? 15 : 20}
                    w={isSmallscreen ? "100%" : "45%"}
                    bg={"transparent"}
                    shadow="none"
                  >
                    <Stack gap={isSmallscreen ? 8 : 15} >
                      <Text
                        fz={isSmallscreen ? 18 : 27}
                        fw={isSmallscreen ? 700 : 600}
                        color="dark"
                     
                        w={isSmallscreen ? "100%" : "90%"}
                      >
                        Surya-Shani Dosha Nivaran Puja and Pitru Mahadaan
                        Kunjika Arpan
                      </Text>

                      <Flex>
                        <Text
                          fz={16}
                          color="dimmed"
                        
                          style={{ lineHeight: 1.4 }}
                          w={isSmallscreen ? "90%" : "90%"}
                        >
                          Heal Ancestral Karmas, Strengthen Family Bonds Heal
                          Ancestral Karmas, Strengthen Family Bonds
                        </Text>
                      </Flex>

                      <Box>
                        <Flex gap="xs" align={"center"}>
                          <Flex>
                            <Image
                              src={image7}
                              h={isSmallscreen ? 30 : 25}
                              w={isSmallscreen ? 30 : 25}
                            />
                          </Flex>
                          <Text
                            fz={12}
                            color="dimmed"
                            ta={isSmallscreen ? "center" : "start"}
                          >
                            Uttar Pardesh Mal Mumbai Pistach
                          </Text>
                        </Flex>

                        <Flex gap="xs" mb={8} align={"center"}>
                          <Flex>
                            <Image
                              src={image8}
                              h={isSmallscreen ? 30 : 25}
                              w={isSmallscreen ? 30 : 25}
                            />
                          </Flex>
                          <Text fz={12} color="dimmed">
                            28 April IST, Monday, Vaishakha Shukla Pratipada
                          </Text>
                        </Flex>
                      </Box>

                      <Flex
                        gap={isSmallscreen ? 10 : 25}
                        wrap="wrap"
                        justify={isSmallscreen ? "center" : "flex-start"}
                      >
                        {Array.from({ length: 4 }).map((_, index) => (
                          <Box
                            key={index}
                            w={isSmallscreen ? 80 : 100}
                            h={isSmallscreen ? 34 : 46}
                            style={{
                              backgroundColor: "#fce6dd",
                              color: "white",
                              padding: "md",
                              borderRadius: 4,
                              textAlign: "center",
                            }}
                          >
                            <Flex
                              justify="center"
                              align="center"
                              h="100%"
                              gap={10}
                            >
                              <Text size="lg" fw={700} c={"#ED561A"}>
                                0
                              </Text>
                              <Text size="sm" opacity={0.8} c={"dark"}>
                                Days
                              </Text>
                            </Flex>
                          </Box>
                        ))}
                      </Flex>

                      <Flex
                        justify={"space-between"}
                        align={"center"}
                        mt={isSmallscreen ? 20 : 0}
                        gap={isSmallscreen ? 10 : 0}
                      >
                        <Avatar.Group spacing="sm">
                          {[image3, image4, image5, image6, image4].map(
                            (img, i) => (
                              <Avatar
                                key={i}
                                src={img}
                                radius="xl"
                                size="md"
                                style={{ border: "2px solid white" }}
                              />
                            )
                          )}
                        </Avatar.Group>

                        <Text
                          size="md"
                          fw={700}
                          ml={isSmallscreen ? 0 : "xl"}
                          c={"#ED561A"}
                        >
                          4.9{" "}
                          <Text span size="sm" c={"#ED561A"}>
                            (7k+ rating)
                          </Text>
                        </Text>
                      </Flex>
                      <Flex justify={isSmallscreen ? "center" : "start"}>
                        <Text
                          mt={isSmallscreen ? 10 : 0}
                          fz={isSmallscreen ? 14 : 20}
                          fw={isSmallscreen ? 700 : 500}
                          w={isSmallscreen ? "90%" : "90%"}
                          ta={isSmallscreen ? "center" : "start"}
                        >
                          We Have{" "}
                          <Text
                            span
                            fz={isSmallscreen ? 16 : 20}
                            fw={600}
                            color="red"
                          >
                            30,0000 User
                          </Text>{" "}
                          Who Have Done This Activity And Get Done By{" "}
                          <Text
                            span
                            fz={isSmallscreen ? 16 : 20}
                            fw={700}
                            color="orange"
                          >
                            Puja Mandir Sevea
                          </Text>
                        </Text>
                      </Flex>
                      <Stack display={isSmallscreen ? "none" : "block"}>
                        <Flex
                          justify={isSmallscreen ? "center" : "center"}
                          gap="md"
                          mt={isSmallscreen ? 15 : 0}
                        >
                          <Button
                            size="lg"
                            radius="md"
                            bg={"#FF5722"}
                            w={isSmallscreen ? "100%" : "50%"}
                          >
                            Select Puja
                          </Button>
                          <Button
                            size="lg"
                            radius="md"
                            bg={"#4CAF50"}
                            w={isSmallscreen ? "100%" : "50%"}
                          >
                            WhatsApp
                          </Button>
                        </Flex>
                      </Stack>
                    </Stack>
                  </Card>
                </Flex>
              </Card>
            </Card>

            <Card
              display={isSmallscreen ? "none" : "block"}
              py={isSmallscreen ? 10 : 20}
              radius={0}
              bg={"transparent"}
              shadow="none"
            >
              <Flex
                justify="center"
                align="center"
                gap={isSmallscreen ? 20 : 8}
              >
                <Image
                  src={image10}
                  w={isSmallscreen ? 24 : 40}
                  h={isSmallscreen ? 20 : 30}
                />
                <Title
                  fz={isSmallscreen ? 21 : 45}
                  fw={isSmallscreen ? 700 : 600}
                  ta="center"
                >
                  <span style={{ color: "#ED561A" }}>PUJA</span> PROCESS
                </Title>
                <Image
                  src={image10}
                  w={isSmallscreen ? 24 : 40}
                  h={isSmallscreen ? 20 : 30}
                />
              </Flex>

              <Flex justify="center" mt={14}>
                <Box w={isSmallscreen ? "90%" : "70%"}>
                  <Text
                    fw={500}
                    fz={isSmallscreen ? 16 : 18}
                    ta="center"
                    c="gray"
                    mb={8}
                  >
                    Book Pujas in your and your family's name at renowned
                    temples in India.
                  </Text>
                  <Text
                    fw={500}
                    fz={isSmallscreen ? 16 : 18}
                    ta="center"
                    c="gray"
                  >
                    Receive divine blessings along with a special video of the
                    sacred rituals.
                  </Text>
                </Box>
              </Flex>
            </Card>

            <Card bg={"transparent"} shadow="none" radius={0}>
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box className="scroll-wrapper">
                  <Box
                    className="scroll-content"
                    style={{
                      display: "inline-block",
                      animation: "scrollText 13s linear infinite",
                    }}
                  >
                    <Flex
                      gap={isSmallscreen ? 15 : 30}
                      align="center"
                      wrap="nowrap"
                      style={{ display: "inline-flex" }}
                    >
                      {Array.from({ length: 16 }).map((_, index) => (
                        <Card
                          shadow="none"
                          key={index}
                          py={isSmallscreen ? 8 : 8}
                          radius={6}
                          withBorder
                          className="scroll-card"
                        >
                          <Flex align="center" gap={8} mb={8}>
                            <Image
                              src={image11}
                              h={isSmallscreen ? 15 : 30}
                              w={isSmallscreen ? 15 : 30}
                            />
                            <Title fw={600} fz={isSmallscreen ? 12 : 18}>
                              Get Puja Video
                            </Title>
                          </Flex>
                          <Text fz={isSmallscreen ? 9 : 16} color="dimmed">
                            Quickly corrects spelling mistakes
                          </Text>
                        </Card>
                      ))}
                    </Flex>
                  </Box>
                </Box>
              </Box>

              <style>
                {`
    @keyframes scrollText {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .scroll-card {
      min-width: 170px;
    }

   
    @media (min-width: 769px) {
      .scroll-card {
        min-width: 280px;
      }
    }

    @media (max-width: 768px) {
      .scroll-wrapper {
        max-width: calc(180px * 3 + 15px * 2); /* 3 cards + 2 gaps */
      }
    }
  `}
              </style>
            </Card>

            <Card
              bg={"transparent"}
              p={0}
              shadow="none"
              display={isSmallscreen ? "block" : "none"}
            >
              <Flex
                justify={isSmallscreen ? "center" : "start"}
                gap="md"
                px={10}
              >
                <Button size="lg" radius="md" bg={"#FF5722"} w={"100%"}>
                  Select Puja
                </Button>
                <Button size="lg" radius="md" bg={"#4CAF50"} w={"100%"}>
                  WhatsApp
                </Button>
              </Flex>
            </Card>

            <Flex justify="center">
              <Card
                w="100%"
                px={isSmallscreen ? 10 : 60}
                radius={0}
                bg="transparent"
                shadow="none"
              >
                <Flex
                  justify={isSmallscreen ? "center" : "space-between"}
                  align={isSmallscreen ? "start" : "center"}
                
                >
                  <Image
                    display={isSmallscreen ? "none" : "block"}
                    src={image13}
                    h={isSmallscreen ? 100 : 182}
                    w={isSmallscreen ? 70 : 160}
                  />

                  <Stack mt={isSmallscreen ? 10 : 0} gap={13}>
                    <Flex justify="center" align="center" gap={8}>
                      <Image
                        src={image2}
                        bg={"transparent"}
                        w={isSmallscreen ? 20 : 40}
                        h={isSmallscreen ? 15 : 30}
                      />
                      <Title
                        ta="center"
                        fz={isSmallscreen ? 26 : 45}
                        fw={isSmallscreen ? 700 : 600}
                      >
                        ABOUT <span style={{ color: "#eb4d0d" }}>PUJA</span>
                      </Title>
                      <Image
                        src={image2}
                        w={isSmallscreen ? 20 : 40}
                        h={isSmallscreen ? 15 : 30}
                      />
                    </Flex>

                    <Box display={isSmallscreen ? "none" : "block"}>
                      <Text
                        fw={600}
                        fz={isSmallscreen ? 12 : 18}
                        ta="center"
                        c={"grey"}
                      >
                        🕉️ Transform your destiny at the temple blessed by the
                        Pandavas, on the sacred day Maa Baglamukhi Jayanti 🕉️
                      </Text>
                    </Box>
                  </Stack>

                  <Image
                    display={isSmallscreen ? "none" : "block"}
                    src={image13}
                    h={isSmallscreen ? 100 : 182}
                    w={isSmallscreen ? 70 : 160}
                  />
                </Flex>
              </Card>
            </Flex>
            <Card mb={20} shadow="none">
              <Text
                display={isSmallscreen ? "block" : "none"}
                px={10}
                mb={15}
                style={{
                  textAlign: "justify",
                }}
              >
                Right in the heart of Himachal Pradesh stands the ancient and
                majestic Maa Baglamukhi Temple at Bankhandi. This sacred site is
                not just a temple but a living embodiment of India's timeless
                spiritual glory. Legend holds that during their exile, the
                Pandavas, through divine intervention, built this temple
                overnight and invoked Maa Baglamukhi through a powerful havan.
                Even today, the original havan kund radiates an unparalleled
                spiritual charge, magnifying every prayer, every mantra, into
                the cosmos. This ancient temple is a living embodiment of Maa’s
                Stambhana Shakti, the power to immobilize negativity, to silence
                adversities, and to grant supreme victory to her devotees. For
                centuries, devotees have offered their prayers here to
                experience her unparalleled grace, finding protection, triumph,
                and inner mastery at her lotus feet. The temple is not merely a
                shrine; it is a spiritual gateway where Maa’s fierce yet
                compassionate energy flows unceasingly.
              </Text>
              <Button
                display={isSmallscreen ? "block" : "none"}
                c={"#ED561A"}
                style={{ border: "1px solid #ED561A" }}
                variant="outline"
              >
                Read More
              </Button>
            </Card>
          </Box>

          <Flex display={isSmallscreen ? "none" : "block"}>
            {isSmallscreen ? (
              <Carousel
                withIndicators
                height="auto"
                slideSize="100%"
                slideGap="md"
                plugins={[Autoplay({ delay: 2000 })]}
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
                      px={isSmallscreen ? 15 : 50}
                      mb={40}
                    >
                      <Card shadow="none" radius="md" bg={"#D14829"}>
                        <Stack>
                          <Box
                            style={{
                              border: "4px solid #FFC107",
                              borderRadius: "8px",
                            }}
                          >
                            <Image src={image14} height={200} fit="cover" />
                          </Box>
                          <Flex justify={"center"}>
                            <Button
                              w={230}
                              radius={10}
                              size="md"
                              bg={"#4E0701"}
                              leftSection={
                                <Image
                                  src={image1}
                                  width={"100%"}
                                  height={24}
                                />
                              }
                            ></Button>
                          </Flex>

                          <Text fz={16} fw={600} color="white" ta={"center"}>
                            Enter your Main heading text here
                          </Text>

                          <Text size="md" fw={600} color="white" ta={"center"}>
                            "जहां भक्ति है, वहीं वैकुण्ठ है –
                            <span style={{ color: "#f67700" }}>
                              OmVaikuntha{" "}
                            </span>{" "}
                            के साथ अपने ईश्वर से
                            <span style={{ color: "#f67700" }}>
                              {" "}
                              जुड़ें!
                            </span>{" "}
                            जहां भक्ति है, वहीं वैकुण्ठ है –{" "}
                            <span style={{ color: "#f67700" }}>
                              OmVaikuntha
                            </span>{" "}
                            के साथ अपने ईश्वर से{" "}
                            <span style={{ color: "#f67700" }}>जुड़ें!</span>"
                          </Text>

                          <Flex justify={"center"}>
                            <Button
                              size="lg"
                              w={230}
                              radius={10}
                              fw={700}
                              bg={"#FFC107"}
                              c={"#4E0701"}
                            >
                              शुरुआत करें
                            </Button>
                          </Flex>
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
                px={isSmallscreen ? 15 : 50}
              >
                <Card shadow="none" radius="md" bg={"#D14829"}>
                  <Stack>
                    <Box
                      style={{
                        border: "4px solid #FFC107",
                        borderRadius: "8px",
                      }}
                    >
                      <Image src={image14} height={200} fit="cover" />
                    </Box>
                    <Flex justify={"center"}>
                      <Button
                        w={230}
                        radius={10}
                        size="md"
                        bg={"#4E0701"}
                        leftSection={
                          <Image src={image1} width={"100%"} height={24} />
                        }
                      ></Button>
                    </Flex>

                    <Text fz={16} fw={600} color="white" ta={"center"}>
                      Enter your Main heading text here
                    </Text>

                    <Text size="md" fw={600} color="white" ta={"center"}>
                      "जहां भक्ति है, वहीं वैकुण्ठ है –
                      <span style={{ color: "#f67700" }}>OmVaikuntha </span> के
                      साथ अपने ईश्वर से
                      <span style={{ color: "#f67700" }}> जुड़ें!</span> जहां
                      भक्ति है, वहीं वैकुण्ठ है –{" "}
                      <span style={{ color: "#f67700" }}>OmVaikuntha</span> के
                      साथ अपने ईश्वर से{" "}
                      <span style={{ color: "#f67700" }}>जुड़ें!</span>"
                    </Text>

                    <Flex justify={"center"}>
                      <Button
                        size="lg"
                        w={230}
                        radius={10}
                        fw={700}
                        bg={"#FFC107"}
                        c={"#4E0701"}
                      >
                        शुरुआत करें
                      </Button>
                    </Flex>
                  </Stack>
                </Card>
                <Card
                  shadow="none"
                  radius="md"
                  bg={"#D14829"}
                  display={isSmallscreen ? "none" : "block"}
                >
                  <Stack>
                    <Box
                      style={{
                        border: "4px solid #FFC107",
                        borderRadius: "8px",
                      }}
                    >
                      <Image src={image14} height={200} fit="cover" />
                    </Box>
                    <Flex justify={"center"}>
                      <Button
                        w={230}
                        radius={10}
                        size="md"
                        bg={"#4E0701"}
                        leftSection={
                          <Image src={image1} width={"100%"} height={24} />
                        }
                      ></Button>
                    </Flex>

                    <Text fz={16} fw={600} color="white" ta={"center"}>
                      Enter your Main heading text here
                    </Text>

                    <Text size="md" fw={600} color="white" ta={"center"}>
                      "जहां भक्ति है, वहीं वैकुण्ठ है –
                      <span style={{ color: "#f67700" }}>OmVaikuntha </span> के
                      साथ अपने ईश्वर से
                      <span style={{ color: "#f67700" }}> जुड़ें!</span> जहां
                      भक्ति है, वहीं वैकुण्ठ है –{" "}
                      <span style={{ color: "#f67700" }}>OmVaikuntha</span> के
                      साथ अपने ईश्वर से{" "}
                      <span style={{ color: "#f67700" }}>जुड़ें!</span>"
                    </Text>

                    <Flex justify={"center"}>
                      <Button
                        size="lg"
                        w={230}
                        radius={10}
                        fw={700}
                        bg={"#FFC107"}
                        c={"#4E0701"}
                      >
                        शुरुआत करें
                      </Button>
                    </Flex>
                  </Stack>
                </Card>
                <Card
                  shadow="none"
                  radius="md"
                  bg={"#D14829"}
                  display={isSmallscreen ? "none" : "block"}
                >
                  <Stack>
                    <Box
                      style={{
                        border: "4px solid #FFC107",
                        borderRadius: "8px",
                      }}
                    >
                      <Image src={image14} height={200} fit="cover" />
                    </Box>
                    <Flex justify={"center"}>
                      <Button
                        w={230}
                        radius={10}
                        size="md"
                        bg={"#4E0701"}
                        leftSection={
                          <Image src={image1} width={"100%"} height={24} />
                        }
                      ></Button>
                    </Flex>

                    <Text fz={16} fw={600} color="white" ta={"center"}>
                      Enter your Main heading text here
                    </Text>

                    <Text size="md" fw={600} color="white" ta={"center"}>
                      "जहां भक्ति है, वहीं वैकुण्ठ है –
                      <span style={{ color: "#f67700" }}>OmVaikuntha </span> के
                      साथ अपने ईश्वर से
                      <span style={{ color: "#f67700" }}> जुड़ें!</span> जहां
                      भक्ति है, वहीं वैकुण्ठ है –{" "}
                      <span style={{ color: "#f67700" }}>OmVaikuntha</span> के
                      साथ अपने ईश्वर से{" "}
                      <span style={{ color: "#f67700" }}>जुड़ें!</span>"
                    </Text>

                    <Flex justify={"center"}>
                      <Button
                        size="lg"
                        w={230}
                        radius={10}
                        fw={700}
                        bg={"#FFC107"}
                        c={"#4E0701"}
                      >
                        शुरुआत करें
                      </Button>
                    </Flex>
                  </Stack>
                </Card>
              </SimpleGrid>
            )}
          </Flex>

          <Flex justify={"center"} display={isSmallscreen ? "none" : "block"}>
            <Flex justify={"center"}>
              <Stack w={"90%"} gap={40}>
                <Text fw={700} fz={16} c={"gray"} ta={"center"}>
                  Right in the heart of Himachal Pradesh stands the ancient and
                  majestic Maa Baglamukhi Temple at Bankhandi. This sacred site
                  is not just a temple but a living embodiment of India's
                  timeless spiritual glory. Legend holds that during their
                  exile, the Pandavas, through divine intervention, built this
                  temple overnight and invoked Maa Baglamukhi through a powerful
                  havan. Even today, the original havan kund radiates an
                  unparalleled spiritual charge, magnifying every prayer, every
                  mantra, into the cosmos. This ancient temple is a living
                  embodiment of Maa’s Stambhana Shakti, the power to immobilize
                  negativity, to silence adversities, and to grant supreme
                  victory to her devotees. For centuries, devotees have offered
                  their prayers here to experience her unparalleled grace,
                  finding protection, triumph, and inner mastery at her lotus
                  feet. The temple is not merely a shrine; it is a spiritual
                  gateway where Maa’s fierce yet compassionate energy flows
                  unceasingly.
                </Text>

                <Text fw={700} fz={16} c={"gray"} ta={"center"}>
                  And now, for the first time ever, Sri Mandir is organizing a
                  Maa Baglamukhi Jayanti Special Puja at this powerful temple,
                  that too on the supremely auspicious day of Maa Baglamukhi
                  Jayanti. This sacred day, celebrated on Vaishakha Shukla
                  Ashtami, marks the divine emergence of Maa Baglamukhi from the
                  sacred Haridra Sarovar. As per ancient scriptures, during the
                  Satyug era, a catastrophic storm once threatened to annihilate
                  all of existence. At Lord Shiva’s guidance, Lord Vishnu
                  performed intense penance at Haridra Sarovar, leading to the
                  manifestation of Maa Baglamukhi, who stilled the storm and
                  restored universal balance. Performing the Maa Baglamukhi
                  Jayanti Special Puja at this ancient and divinely charged
                  temple grants devotees the supreme blessings of Sukh
                  (Happiness), Samriddhi (Prosperity), and Shanti (Peace). In
                  the magnified spiritual energy of Bankhandi, prayers become
                  potent forces of transformation. Join us in this divine event
                  and unlock the fierce grace of Maa Baglamukhi for victory,
                  protection, and a life filled with divine blessings.
                </Text>
              </Stack>
            </Flex>
          </Flex>

          <Stack display={isSmallscreen ? "block" : "none"}>
            <Flex justify="center" align="center" gap={isSmallscreen ? 15 : 8}>
              <Image
                src={image10}
                w={isSmallscreen ? 24 : 40}
                h={isSmallscreen ? 20 : 30}
              />
              <Title
                fz={isSmallscreen ? 21 : 45}
                fw={isSmallscreen ? 700 : 600}
                ta="center"
                c={"#ED561A"}
              >
                Participate in Puja
              </Title>
              <Image
                src={image10}
                w={isSmallscreen ? 24 : 40}
                h={isSmallscreen ? 20 : 30}
              />
            </Flex>
          </Stack>

          {isSmallscreen ? (
            <>
              <SimpleGrid cols={4} spacing="md" px={20}>
                {items.map((item, index) => (
                  <Flex justify={"center"} key={index}>
                    <Box
                      onClick={() => setSelectedItem(index)}
                      style={{
                        width: 90,
                        borderRadius: 20,
                      }}
                    >
                      <Box
                        p="sm"
                        style={{
                          background:
                            "linear-gradient(to right, #F78F8F, #F29E65)",
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                      >
                        <Image
                          src={image24}
                          height={40}
                          fit="contain"
                          style={{ borderRadius: 8 }}
                        />
                      </Box>

                      <Box
                        w="100%"
                        h={40}
                        bg="#fff"
                        style={{
                          border: "2px solid #F78F8F",
                          borderTop: "none",
                          borderBottomLeftRadius: 6,
                          borderBottomRightRadius: 6,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontWeight: 700,
                          color: "#6B2F0C",
                        }}
                      >
                        ${item.price}
                      </Box>
                    </Box>
                  </Flex>
                ))}
              </SimpleGrid>
            </>
          ) : (
            <>
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
                 
                  >
                    <Image
                      src={image13}
                      h={isSmallscreen ? 100 : 182}
                      w={isSmallscreen ? 70 : 160}
                    />

                    <Stack mt={isSmallscreen ? 50 : 0} gap={13}>
                      <Flex justify="center" align="center" gap={8}>
                        <Image
                          src={image2}
                          bg={"transparent"}
                          w={isSmallscreen ? 20 : 40}
                          h={isSmallscreen ? 15 : 30}
                        />
                        <Title
                          ta="center"
                          fz={isSmallscreen ? 21 : 45}
                          fw={isSmallscreen ? 700 : 600}
                        >
                          <span style={{ color: "#eb4d0d" }}>PUJA</span> PAKAGES
                        </Title>
                        <Image
                          src={image2}
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
                          book Pujas in your and your family's name at renowned
                          temples in India. Receive divine blessings along with
                          a special video of the sacred rituals.
                        </Text>
                      </Box>
                    </Stack>

                    <Image
                      src={image13}
                      h={isSmallscreen ? 100 : 182}
                      w={isSmallscreen ? 70 : 160}
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
                px={isSmallscreen ? 15 : 40}
              >
                <Card
                  shadow="none"
                  padding={0}
                  radius="md"
                  withBorder
                  style={{ border: "1px solid #F78F8F" }}
                  display={isSmallscreen ? "none" : "block"}
                >
                  <Card
                    shadow="none"
                    h={195}
                    radius={0}
                    style={{
                      background: "linear-gradient(to right, #F78F8F, #F29E65)",
                    }}
                  >
                    <Flex align={"end"} h={"100%"}>
                      <Stack w={"75%"} gap={5}>
                        <Title order={2} fw={700} w={"90%"}>
                          Individual kanakdhaara stotra yagya
                        </Title>
                        <Title order={4}> $851</Title>
                      </Stack>
                      <BackgroundImage
                        src={image15}
                        pos={"relative"}
                        w={"40%"}
                        h={140}
                        style={{ objectFit: "contain" }}
                      />

                      <Badge
                        pos={"absolute"}
                        top={0}
                        right={0}
                        bg={"#ED561A"}
                        m={10}
                      >
                        6 Devotes
                      </Badge>
                    </Flex>
                  </Card>

                  <Card
                    px={20}
                    shadow="none"
                    pt={20}
                    bg={"transparent"}
                    radius={0}
                    display={isSmallscreen ? "none" : "block"}
                  >
                    <List
                      spacing={20}
                      size="sm"
                      center
                      icon={<Image src={image19} h={30} w={30} />}
                      style={{ textAlign: "left" }}
                      mb="xl"
                      c={"grey"}
                    >
                      <List.Item style={{ lineHeight: 1.8 }}>
                        Link For Recorded Video Of Puja And Yagya In Siddha
                        Shaktipeeth
                      </List.Item>
                      <List.Item style={{ lineHeight: 1.8 }}>
                        Link For Recorded Video Of Puja And Yagya In Siddha
                        Shaktipeeth Link For Recorded Video Of Puja And Yagya In
                        Siddha Shaktipeeth
                      </List.Item>
                      <List.Item style={{ lineHeight: 1.8 }}>
                        Link For Recorded Video Of Puja And Yagya In Siddha
                        Shaktipeeth Link For Recorded Video Of Puja And Yagya In
                        Siddha Shaktipeeth
                      </List.Item>
                      <List.Item style={{ lineHeight: 1.8 }}>
                        Link For Recorded Video Of Puja And Yagya In Siddha
                        Shaktipeeth Link For Recorded Video Of Puja And Yagya In
                        Siddha Shaktipeeth
                      </List.Item>
                    </List>

                    <Button
                      size="lg"
                      fullWidth
                      radius={30}
                      style={{
                        backgroundColor: "#FF5722",
                        "&:hover": { backgroundColor: "#E64A19" },
                        borderBottomLeftRadius: "md",
                        borderBottomRightRadius: "md",
                      }}
                      onClick={() => navigate("/review-booking")}
                    >
                      Participate
                    </Button>
                  </Card>
                </Card>

                <Card
                  shadow="none"
                  padding={0}
                  radius="md"
                  withBorder
                  style={{ border: "1px solid #F78F8F" }}
                  display={isSmallscreen ? "none" : "block"}
                >
                  <Card
                    shadow="none"
                    h={195}
                    radius={0}
                    style={{
                      background: "linear-gradient(to right, #F78F8F, #F29E65)",
                    }}
                  >
                    <Flex align={"end"} h={"100%"}>
                      <Stack w={"75%"} gap={5}>
                        <Title order={2} fw={700} w={"90%"}>
                          Individual kanakdhaara stotra yagya
                        </Title>
                        <Title order={4}> $851</Title>
                      </Stack>
                      <BackgroundImage
                        src={image15}
                        pos={"relative"}
                        w={"40%"}
                        h={140}
                        style={{ objectFit: "contain" }}
                      />

                      <Badge
                        pos={"absolute"}
                        top={0}
                        right={0}
                        bg={"#ED561A"}
                        m={10}
                      >
                        6 Devotes
                      </Badge>
                    </Flex>
                  </Card>

                  <Card
                    px={20}
                    shadow="none"
                    pt={20}
                    bg={"transparent"}
                    radius={0}
                    display={isSmallscreen ? "none" : "block"}
                  >
                    <List
                      spacing={20}
                      size="sm"
                      center
                      icon={<Image src={image19} h={30} w={30} />}
                      style={{ textAlign: "left" }}
                      mb="xl"
                      c={"grey"}
                    >
                      <List.Item style={{ lineHeight: 1.8 }}>
                        Link For Recorded Video Of Puja And Yagya In Siddha
                        Shaktipeeth
                      </List.Item>
                      <List.Item style={{ lineHeight: 1.8 }}>
                        Link For Recorded Video Of Puja And Yagya In Siddha
                        Shaktipeeth Link For Recorded Video Of Puja And Yagya In
                        Siddha Shaktipeeth
                      </List.Item>
                      <List.Item style={{ lineHeight: 1.8 }}>
                        Link For Recorded Video Of Puja And Yagya In Siddha
                        Shaktipeeth Link For Recorded Video Of Puja And Yagya In
                        Siddha Shaktipeeth
                      </List.Item>
                      <List.Item style={{ lineHeight: 1.8 }}>
                        Link For Recorded Video Of Puja And Yagya In Siddha
                        Shaktipeeth Link For Recorded Video Of Puja And Yagya In
                        Siddha Shaktipeeth
                      </List.Item>
                    </List>

                    <Button
                      size="lg"
                      fullWidth
                      radius={30}
                      style={{
                        backgroundColor: "#FF5722",
                        "&:hover": { backgroundColor: "#E64A19" },
                        borderBottomLeftRadius: "md",
                        borderBottomRightRadius: "md",
                      }}
                      onClick={() => navigate("/review-booking")}
                    >
                      Participate
                    </Button>
                  </Card>
                </Card>

                <Card
                  shadow="none"
                  padding={0}
                  radius="md"
                  withBorder
                  style={{ border: "1px solid #F78F8F" }}
                  display={isSmallscreen ? "none" : "block"}
                >
                  <Card
                    shadow="none"
                    h={195}
                    radius={0}
                    style={{
                      background: "linear-gradient(to right, #F78F8F, #F29E65)",
                    }}
                  >
                    <Flex align={"end"} h={"100%"}>
                      <Stack w={"75%"} gap={5}>
                        <Title order={2} fw={700} w={"90%"}>
                          Individual kanakdhaara stotra yagya
                        </Title>
                        <Title order={4}> $851</Title>
                      </Stack>
                      <BackgroundImage
                        src={image15}
                        pos={"relative"}
                        w={"40%"}
                        h={140}
                        style={{ objectFit: "contain" }}
                      />

                      <Badge
                        pos={"absolute"}
                        top={0}
                        right={0}
                        bg={"#ED561A"}
                        m={10}
                      >
                        6 Devotes
                      </Badge>
                    </Flex>
                  </Card>

                  <Card
                    px={20}
                    shadow="none"
                    pt={20}
                    bg={"transparent"}
                    radius={0}
                    display={isSmallscreen ? "none" : "block"}
                  >
                    <List
                      spacing={20}
                      size="sm"
                      center
                      icon={<Image src={image19} h={30} w={30} />}
                      style={{ textAlign: "left" }}
                      mb="xl"
                      c={"grey"}
                    >
                      <List.Item style={{ lineHeight: 1.8 }}>
                        Link For Recorded Video Of Puja And Yagya In Siddha
                        Shaktipeeth
                      </List.Item>
                      <List.Item style={{ lineHeight: 1.8 }}>
                        Link For Recorded Video Of Puja And Yagya In Siddha
                        Shaktipeeth Link For Recorded Video Of Puja And Yagya In
                        Siddha Shaktipeeth
                      </List.Item>
                      <List.Item style={{ lineHeight: 1.8 }}>
                        Link For Recorded Video Of Puja And Yagya In Siddha
                        Shaktipeeth Link For Recorded Video Of Puja And Yagya In
                        Siddha Shaktipeeth
                      </List.Item>
                      <List.Item style={{ lineHeight: 1.8 }}>
                        Link For Recorded Video Of Puja And Yagya In Siddha
                        Shaktipeeth Link For Recorded Video Of Puja And Yagya In
                        Siddha Shaktipeeth
                      </List.Item>
                    </List>

                    <Button
                      size="lg"
                      fullWidth
                      radius={30}
                      style={{
                        backgroundColor: "#FF5722",
                        "&:hover": { backgroundColor: "#E64A19" },
                        borderBottomLeftRadius: "md",
                        borderBottomRightRadius: "md",
                      }}
                      onClick={() => navigate("/review-booking")}
                    >
                      Participate
                    </Button>
                  </Card>
                </Card>
              </SimpleGrid>
            </>
          )}

          {isSmallscreen && selectedItem !== null && (
            <Box mt="md" px={15}>
              <Card
           
                shadow="none"
              
                radius="md"
                withBorder
                style={{ border: "1px solid #F78F8F" }}
              >
                <Stack gap={10}>
                  <Title fz={22} fw={700}>
                    Joint Family Mahamrityunjaya Mantra jaap
                  </Title>
                  <Text fz={16} fw={700} c={"#ED561A"}>
                    6 Devotes
                  </Text>
                </Stack>

                <Card
                  px={20}
                  shadow="none"
                  pt={20}
                  bg={"transparent"}
                  radius={0}
                >
                  <List
                    spacing={15}
                    size="sm"
                    icon={<Image src={image19} h={30} w={30} />}
                    c={"grey"}
                  >
                    <List.Item style={{ lineHeight: 1.8 }}>
                      Link For Recorded Video Of Puja And Yagya In Siddha
                      Shaktipeeth
                    </List.Item>
                    <List.Item style={{ lineHeight: 1.8 }}>
                      Link For Recorded Video Of Puja And Yagya In Siddha
                      Shaktipeeth Link For Recorded Video Of Puja And Yagya In
                      Siddha Shaktipeeth
                    </List.Item>
                    <List.Item style={{ lineHeight: 1.8 }}>
                      Link For Recorded Video Of Puja And Yagya In Siddha
                      Shaktipeeth Link For Recorded Video Of Puja And Yagya In
                      Siddha Shaktipeeth
                    </List.Item>
                    <List.Item style={{ lineHeight: 1.8 }}>
                      Link For Recorded Video Of Puja And Yagya In Siddha
                      Shaktipeeth Link For Recorded Video Of Puja And Yagya In
                      Siddha Shaktipeeth
                    </List.Item>
                  </List>

                  <Button
                    size="lg"
                    fullWidth
                    radius={30}
                    mt={30}
                    style={{
                      backgroundColor: "#FF5722",
                    }}
                    onClick={() => navigate("/review-booking")}
                  >
                    Participate
                  </Button>
                </Card>
              </Card>
            </Box>
          )}


          {/* ////////////////////// */}

          <Card
            py={30}
            radius={0}
            shadow="none"
            display={isSmallscreen ? "none" : "block"}
          >
            <Flex justify={"center"} align={"center"} gap={8}>
              <Image
                src={image10}
                w={isSmallscreen ? 24 : 40}
                h={isSmallscreen ? 20 : 30}
              />
              <Title
                fz={isSmallscreen ? 21 : 45}
                fw={isSmallscreen ? 700 : 600}
              >
                <span style={{ color: "#ED561A" }}>CHOOSE</span> AN OFFERING
              </Title>
              <Image
                src={image10}
                w={isSmallscreen ? 24 : 40}
                h={isSmallscreen ? 20 : 30}
              />
            </Flex>
            <Flex justify={"center"} mt={14}>
              <Box>
                <Text fw={500} fz={18} w={"100%"} ta={"center"} c={"gray"}>
                  book Pujas in your and your family's name at renowned temples
                  in India.
                </Text>
                <Text fw={500} fz={18} w={"100%"} ta={"center"} c={"gray"}>
                  Receive divine blessings along with a special video of the
                  sacred rituals.
                </Text>
              </Box>
            </Flex>
          </Card>

          <Stack display={isSmallscreen ? "block" : "none"} mt={20} mb={20}>
            <Flex justify="center" align="center" gap={isSmallscreen ? 15 : 8}>
              <Image
                src={image10}
                w={isSmallscreen ? 24 : 40}
                h={isSmallscreen ? 20 : 30}
              />
              <Title
                fz={isSmallscreen ? 21 : 45}
                fw={isSmallscreen ? 700 : 600}
                ta="center"
                c={"#ED561A"}
              >
                Choose An Offering
              </Title>
              <Image
                src={image10}
                w={isSmallscreen ? 24 : 40}
                h={isSmallscreen ? 20 : 30}
              />
            </Flex>
          </Stack>

          {isSmallscreen ? (
            <SimpleGrid cols={{ xs: 1 }} spacing={10} px={20}>
              {itemsData.slice(0, 2).map((item) => (
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
                        <Flex justify="center" align="center" h="100%">
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
                          <Text c={"white"}>{quantities[item.id]}</Text>
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
                            backgroundColor: "#EC0617",
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
                <Card key={item.id} bg="transparent" shadow="none" p={10}>
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

                  <Flex mb="sm" align="end" w="30%" gap={10} justify="start">
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
                        <Flex justify={"center"} align={"center"} h={"100%"}>
                          <Text>
                            $
                            {quantities[item.id]
                              ? quantities[item.id] * item.price
                              : item.price}
                          </Text>
                        </Flex>
                      </Box>

                      {quantities[item.id] ? (
                        <Flex align="center" gap="xs">
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
                            color="white"
                            onClick={() => handleIncrement(item.id)}
                          >
                            +
                          </Button>
                        </Flex>
                      ) : (
                        <Button
                          variant="filled"
                          color="#EC0617"
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

          {/* //////////////////////////////////////////////////////////////////////// */}

          <Flex justify={"center"}>
            <Card
              bg={"#e04307"}
              radius={13}
              p={10}
              px={40}
              w={"90%"}
              shadow="none"
            >
              <Flex justify={"space-between"} align={"center"} h={"100%"}>
                <Flex gap={10}>
                  <Text c={"white"} fz={16} fw={600}>
                    1 Offering
                  </Text>
                  <Text c={"white"} fz={16} fw={600}>
                    $ 76
                  </Text>
                </Flex>

                <Button bg={"transparent"}>Next</Button>
              </Flex>
            </Card>
          </Flex>

          <Box>
            <Flex justify={"center"} mt={10}>
              <Card
                w={"100%"}
                px={10}
                radius={0}
                bg={"transparent"}
                shadow="none"
              >
                <Flex justify={"center"} align={"center"}>
                  <Stack w={isSmallscreen ? "100%" : "60%"}>
                    <Flex justify={"center"} align={"center"} gap={8}>
                      <Image
                        src={image10}
                        w={isSmallscreen ? 20 : 40}
                        h={isSmallscreen ? 15 : 30}
                      />
                      <Title
                        fz={isSmallscreen ? 21 : 45}
                        fw={isSmallscreen ? 700 : 600}
                      >
                        About{" "}
                        <span style={{ color: "#eb4d0d" }}>PUJA TAMPLES</span>
                      </Title>
                      <Image
                        src={image10}
                        w={isSmallscreen ? 20 : 40}
                        h={isSmallscreen ? 15 : 30}
                      />
                    </Flex>
                    <Box display={isSmallscreen ? "none" : "block"}>
                      <Text
                        fw={500}
                        fz={18}
                        w={"100%"}
                        ta={"center"}
                        c={"gray"}
                      >
                        🕉️ Transform your destiny at the temple blessed by the
                        Pandavas, on the sacred day Maa Baglamukhi Jayanti 🕉️
                      </Text>
                    </Box>
                  </Stack>
                </Flex>
              </Card>
            </Flex>

            <Flex justify={"center"}>
              <Card
                w={isSmallscreen ? "100%" : "90%"}
                bg={"transparent"}
                shadow="none"
              >
                <Stack mb={20}>
                  <Image
                    src={image17}
                    style={{ objectFit: "contain" }}
                    h={"100%"}
                  />
                  <Flex justify={"center"}>
                    <Text w={"90%"} ta={"center"} fw={600} fz={16} c={"gray"}>
                      Right in the heart of Himachal Pradesh stands the ancient
                      and majestic Maa Baglamukhi Temple at Bankhandi. This
                      sacred site is not just a temple but a living embodiment
                      of India's timeless spiritual glory. Legend holds that
                      during their exile, the Pandavas, through divine
                      intervention, built this temple overnight and invoked Maa
                      Baglamukhi through a powerful havan. Even today, the
                      original havan kund radiates an unparalleled spiritual
                      charge, magnifying every prayer, every{" "}
                    </Text>
                  </Flex>
                </Stack>
              </Card>
            </Flex>
          </Box>

          <Flex justify={"center"} mt={10}>
            <Card
              w={"100%"}
              px={10}
              radius={0}
              bg={"transparent"}
              shadow="none"
            >
              <Flex justify={"center"} align={"center"}>
                <Stack w={isSmallscreen ? "100%" : "60%"}>
                  <Flex justify={"center"} align={"center"} gap={8}>
                    <Image
                      src={image10}
                      w={isSmallscreen ? 20 : 40}
                      h={isSmallscreen ? 15 : 30}
                    />
                    <Title fz={isSmallscreen ? 20 : 45} fw={700}>
                      REVIEWS <span style={{ color: "#eb4d0d" }}>&</span> RATING
                    </Title>
                    <Image
                      src={image10}
                      w={isSmallscreen ? 20 : 40}
                      h={isSmallscreen ? 15 : 30}
                    />
                  </Flex>
                  <Box>
                    <Text fw={500} fz={18} w={"100%"} ta={"center"} c={"gray"}>
                      🕉️ Transform your destiny at the temple blessed by the
                      Pandavas, on the sacred day Maa Baglamukhi Jayanti 🕉️
                    </Text>
                  </Box>
                </Stack>
              </Flex>
            </Card>
          </Flex>

          <Flex justify={"center"} w={"100%"} px={15}>
            {isSmallscreen ? (
              <Carousel
                withIndicators
                height="auto"
                slideSize="100%"
                slideGap="md"
                plugins={[Autoplay({ delay: 2000 })]}
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
                            looks great but also improved our conversion rates.
                            Their design process was smooth, communication was
                            clear, and they met all deadlines. We’ve received
                            numerous compliments on the new site, and it’s
                            easier for customers to navigate.
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
                      <Rating size="sm" color="#1c55e0" readOnly value={4} />
                      <Text fw={600}>4/5</Text>
                    </Flex>

                    <Text fz={isSmallscreen ? 12 : 16}>
                      The team took time to understand our vision and delivered
                      a sleek, professional site that not only looks great but
                      also improved our conversion rates. Their design process
                      was smooth, communication was clear, and they met all
                      deadlines. We’ve received numerous compliments on the new
                      site, and it’s easier for customers to navigate.
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
                      The team took time to understand our vision and delivered
                      a sleek, professional site that not only looks great but
                      also improved our conversion rates. Their design process
                      was smooth, communication was clear, and they met all
                      deadlines. We’ve received numerous compliments on the new
                      site, and it’s easier for customers to navigate.
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
                      The team took time to understand our vision and delivered
                      a sleek, professional site that not only looks great but
                      also improved our conversion rates. Their design process
                      was smooth, communication was clear, and they met all
                      deadlines. We’ve received numerous compliments on the new
                      site, and it’s easier for customers to navigate.
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

          <Box>
            <Card
              bg={"#fcede7"}
              py={{ base: 40, md: 80 }}
              shadow="none"
              radius={0}
            >
              <Flex justify={"center"} align={"center"} gap={8} bg={"#fcede7"}>
                <Image
                  src={image10}
                  w={isSmallscreen ? 20 : 40}
                  h={isSmallscreen ? 15 : 30}
                  bg={"#fcede7"}
                />
                <Title
                  c={"#ED561A"}
                  fz={isSmallscreen ? 18 : 40}
                  fw={700}
                  ta={{ base: "center", md: "start" }}
                >
                  Subscribe to OmVaikuntha
                </Title>
                <Image
                  src={image10}
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
                  h={50}
                  radius={8}
                  leftSection={<Image src={image20} h={30} w={30} mr={8} />}
                >
                  Join our whatsapp channel
                </Button>
              </Flex>
            </Card>

            <Card
              pt={80}
              px={50}
              // py={40}
              radius={0}
              shadow="none"
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

export default PujaProcess;
