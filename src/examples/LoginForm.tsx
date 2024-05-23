import { Button, Input, Text } from "@/components";
import { Box, Stack } from "@/components/Layout";

export const LoginForm = () => {
  return (
    <Box className="px-8 py-12  border border-gray-300 rounded-xl">
      <Stack>
        <Text
          as="h2"
          weight={"bold"}
          align={"center"}
          size={"3xl"}
          className="mb-2"
        >
          Login
        </Text>

        <Text
          as="span"
          emphasis={"low"}
          size={"sm"}
          align={"center"}
          className="mb-8"
        >
          Please enter your credentals to login
        </Text>
        <Text
          as="label"
          htmlfor="username"
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
          htmlfor="password"
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
        <Button type="submit" variant={"solid"} className="mb-4 mt-3">
          Login
        </Button>
      </Stack>
    </Box>
  );
};
