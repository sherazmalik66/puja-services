import {
  Card,
  Flex,
  Box,
  Anchor,
  Button,
  Image,
  Drawer,
  Burger,
  Text,
  ActionIcon,
  Menu,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useLocation, Link, useNavigate } from "react-router-dom";
import image1 from "../images/image-1.png";
import image2 from "../images/Group-1.png";
import IconChervonDown from "./iconChervonDown";
import { useState } from "react";

function Navbar() {
  
  const navigate = useNavigate()

  const isSmallscreen = useMediaQuery("(max-width: 56.25em)");
  const [opened, { toggle, close }] = useDisclosure(false);
  const location = useLocation();
  const languages = [
    { label: "English", value: "en" },
    { label: "हिन्दी", value: "hi" },
    { label: "தமிழ்", value: "ta" },
    { label: "తెలుగు", value: "te" },
    { label: "বাংলা", value: "bn" },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Puja Seva", path: "/perform-puja" },
    { label: "Chadwa Seva" },
    { label: "Mantra" },
    { label: "Today Punchang" },
    { label: "About Us" },
  ];

  // Active condition helper
  const getIsActive = (label, path) => {
    const currentPath = location.pathname;
    if (label === "Home") {
      return currentPath === "/" || currentPath === "/puja-process";
    }
    if (label === "Puja Seva") {
      return currentPath === "/perform-puja" || currentPath === "/review-booking" || currentPath === "/thank-you";
    }
    return currentPath === path;
  };

  return (
    <>
      <Card
        h={80}
        style={{ borderBottom: "1px solid #e4e4e4" }}
        p={0}
        shadow="none"
        px={20}
        radius={0}
      >
        <Flex
          justify="space-between"
          align="center"
          h="100%"
          gap={isSmallscreen ? 30 : 5}
        >
          <Box onClick={()=>navigate('/')} style={{
            cursor:'pointer'
          }}>
            <Image src={image1} h={50} fit="contain" />
          </Box>

          {isSmallscreen ? (
            <Flex align="center" gap={10}>
              <Button
                w={80}
                h={35}
                fz={14}
                bg="#ed561a"
                px={12}
                onClick={() => alert("Login clicked")}
              >
                Login
              </Button>
              <Burger
                bg="red"
                w={40}
                h={40}
                pl={8}
                opened={opened}
                onClick={toggle}
                color="white"
                size="md"
                style={{ borderRadius: 30 }}
              />
            </Flex>
          ) : (
            <Flex justify="space-between" align="center" w="100%">
              <Flex gap={20} mx="auto">
                {navLinks.map((link, idx) => {
                  const isActive = getIsActive(link.label, link.path);

                  if (link.path) {
                    return (
                      <Anchor
                        key={link.path}
                        fw={600}
                        fz={16}
                        component={Link}
                        to={link.path}
                        c={isActive ? "#ed561a" : "black"}
                        underline={isActive ? "always" : "never"}
                        style={
                          isActive
                            ? {
                                textUnderlineOffset: "6px",
                                textDecorationThickness: "2px",
                              }
                            : {}
                        }
                      >
                        {link.label}
                      </Anchor>
                    );
                  }

                  return (
                    <Text
                      key={idx}
                      fw={600}
                      fz={16}
                      c="black"
                      style={{ cursor: "pointer" }}
                    >
                      {link.label}
                    </Text>
                  );
                })}
              </Flex>

              <Flex align="center" gap={20}>
                <Menu width={150} shadow="md" position="bottom-end">
                  <Menu.Target>
                    <Flex align="center" gap={6} style={{ cursor: "pointer" }}>
                      <Image src={image2} h={35} w={35} />
                      <Text fw={600} c="#b3b3b3">
                        {
                          languages.find(
                            (lang) => lang.value === selectedLanguage
                          )?.label
                        }
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
                  </Menu.Target>

                  <Menu.Dropdown>
                    {languages.map((lang) => (
                      <Menu.Item
                        key={lang.value}
                        onClick={() => setSelectedLanguage(lang.value)}
                      >
                        {lang.label}
                      </Menu.Item>
                    ))}
                  </Menu.Dropdown>
                </Menu>

                <Button w={90} h={40} fz={14} bg="#ed561a">
                  LogIn
                </Button>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Card>

      {/* Drawer for Small Screens */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Menu"
        padding="md"
        size="75%"
      >
        <Flex direction="column" gap="md">
          {navLinks.map((link, idx) => {
            const isActive = getIsActive(link.label, link.path);

            if (link.path) {
              return (
                <Anchor
                  key={link.path}
                  fw={600}
                  fz={16}
                  component={Link}
                  to={link.path}
                  onClick={close}
                  c={isActive ? "#ed561a" : "black"}
                  underline={isActive ? "always" : "never"}
                >
                  {link.label}
                </Anchor>
              );
            }

            return (
              <Text
                key={idx}
                fw={600}
                fz={16}
                c="black"
                style={{ cursor: "pointer" }}
              >
                {link.label}
              </Text>
            );
          })}
        </Flex>
        <Flex align="center" gap={6} mt={16}>
          <Image src={image2} h={35} w={35} />
          <Text fw={600} c="#b3b3b3">
            {
              languages.find(
                (lang) => lang.value === selectedLanguage
              )?.label
            }
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
      </Drawer>
    </>
  );
}

export default Navbar;
