import { Button, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react"

import Timer from "./Timer";
function App() {
  return (
    <Flex align="center" justify="center" h="100vh" flexDirection="column">
      <Heading size="4xl">Pomodoro Web</Heading>
      <Tabs>
        <TabList>
          <Tab>Work</Tab>
          <Tab>Short Break</Tab>

        </TabList>

        <TabPanels>
          <TabPanel>
            <Timer initialMinute="25" initialSeconds="1" />

          </TabPanel>
          <TabPanel>
            <Timer initialMinute="5" initialSeconds="1" />

          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default App;
