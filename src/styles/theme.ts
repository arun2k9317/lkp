import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
    colorScheme: "light",
    primaryColor: "cyan",
    colors: {
        cyan: [
            "#E6F9FC", // 0 - Lightest
            "#B3EEFA", // 1
            "#85E7FD", // 2
            "#4EDFFF", // 3 - Primary Light
            "#31CCEE", // 4
            "#27BCDD", // 5
            "#21A6C3", // 6 - Primary
            "#1C8AA5", // 7
            "#176F88", // 8
            "#0F4A5C", // 9 - Darkest
        ],
        dark: [
            "#F0F0F0", // 0 - Lightest
            "#E0E0E0", // 1
            "#C0C0C0", // 2
            "#808080", // 3
            "#4E4E4E", // 4 - Gray
            "#383838", // 5
            "#272727", // 6
            "#1F1F1F", // 7 - Dark
            "#141414", // 8
            "#0A0A0A", // 9 - Darkest
        ],
    },
    fontFamily: "Inter, sans-serif",
    headings: {
        fontWeight: "600",
        fontFamily: "Inter, sans-serif",
    },
    components: {
        Card: {
            styles: {
                root: {
                    borderRadius: "1rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 4px 16px rgba(33, 166, 195, 0.2)",
                    },
                },
            },
        },
        Badge: {
            styles: {
                root: {
                    borderRadius: "2rem",
                    backgroundColor: "#21A6C3",
                    color: "white",
                    fontWeight: "500",
                },
            },
        },
        Modal: {
            styles: {
                header: {
                    backgroundColor: "#21A6C3",
                    color: "white",
                    borderRadius: "1rem 1rem 0 0",
                },
                title: {
                    color: "white",
                    fontWeight: "600",
                },
            },
        },
        Button: {
            styles: {
                root: {
                    borderRadius: "0.5rem",
                    fontWeight: "500",
                    transition: "all 0.2s ease",
                },
            },
        },
        TextInput: {
            styles: {
                input: {
                    borderRadius: "0.5rem",
                    border: "1px solid #E0E0E0",
                    "&:focus": {
                        borderColor: "#21A6C3",
                        boxShadow: "0 0 0 2px rgba(33, 166, 195, 0.2)",
                    },
                },
            },
        },
        Select: {
            styles: {
                input: {
                    borderRadius: "0.5rem",
                    border: "1px solid #E0E0E0",
                    "&:focus": {
                        borderColor: "#21A6C3",
                        boxShadow: "0 0 0 2px rgba(33, 166, 195, 0.2)",
                    },
                },
            },
        },
        Textarea: {
            styles: {
                input: {
                    borderRadius: "0.5rem",
                    border: "1px solid #E0E0E0",
                    "&:focus": {
                        borderColor: "#21A6C3",
                        boxShadow: "0 0 0 2px rgba(33, 166, 195, 0.2)",
                    },
                },
            },
        },
    },
    // globalStyles removed to avoid serialization issues
};
