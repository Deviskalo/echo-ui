import { Button, Input, Text } from "@/components";
import { Box, Stack } from "@/components/Layout";

export const RegisterForm = () => {
  return (
    <Box className="px-8 py-12  border border-gray-300 rounded-2xl">
      <Stack>
        <Text
          as="h2"
          weight={"semibold"}
          align={"center"}
          size={"3xl"}
          className="mb-2"
        >
          Register
        </Text>

        <Text
          as="span"
          emphasis={"low"}
          size={"sm"}
          align={"center"}
          className="mb-8"
        >
          Please enter your credentals to register
        </Text>
        <Text
          as="label"
          htmlFor="username"
          size={"sm"}
          italic={true}
          weight={"medium"}
          className="mb-1.5"
        >
          Email
        </Text>
        <Input
          type="email"
          id="email"
          placeholder="input email"
          className="mb-4 mt-2"
        />
        <Text
          as="label"
          htmlFor="username"
          size={"sm"}
          weight={"medium"}
          className="mb-1.5"
        >
          Username
        </Text>
        <Input
          type="text"
          id="username"
          placeholder="input username"
          className="mb-4 mt-2"
        />
        <Text
          as="label"
          htmlFor="password"
          size={"sm"}
          weight={"medium"}
          className="mb-1.5"
        >
          Password
        </Text>
        <Input
          type="password"
          id="password"
          placeholder="input password"
          className="mb-4 mt-2"
        />
        <Button
          type="submit"
          variant={"solid"}
          size={"sm"}
          className="mb-4 mt-3 text-xl hover:bg-secondary-500"
          colorscheme={"secondary"}
        >
          Register
        </Button>
      </Stack>
    </Box>
  );
};
