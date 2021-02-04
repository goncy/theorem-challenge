import React from "react";
import {Container, Stack, Text} from "@chakra-ui/react";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";

import {Provider as FeedbackProvider} from "../../feedback/context";
import ShareScreen from "../../feedback/screens/Share";
import HistoryScreen from "../../feedback/screens/History";
import WizardScreen from "../../feedback/screens/Wizard";
import NotFoundScreen from "../screens/NotFound";
import CompletedScreen from "../../feedback/screens/Completed";

const App: React.FC = () => {
  return (
    <Stack height="100%">
      <Stack as="header" backgroundColor="gray.100" boxShadow="sm" paddingX={6}>
        <Container maxWidth="5xl">
          <Stack alignItems="center" direction="row" spacing={24}>
            <Text fontSize="xl" fontWeight="bold">
              Honesto
            </Text>
            <Stack direction="row" flex={1} fontWeight="500" spacing={12}>
              <NavLink to="/">
                <Text paddingY={6}>Share feedback</Text>
              </NavLink>
              <NavLink to="/history">
                <Text paddingY={6}>My feedback</Text>
              </NavLink>
            </Stack>
            <Text fontWeight="500">Logout</Text>
          </Stack>
        </Container>
      </Stack>
      <Stack flex={1}>
        <Container maxWidth="5xl" paddingY={12}>
          <FeedbackProvider>
            <Switch>
              <Route exact component={ShareScreen} path="/" />
              <Route component={HistoryScreen} path="/history/:user?" />
              <Route exact component={CompletedScreen} path="/:user/completed" />
              <Route exact component={WizardScreen} path="/:user/:question" />
              <Route component={NotFoundScreen} path="/404" />
              <Redirect to="/404" />
            </Switch>
          </FeedbackProvider>
        </Container>
      </Stack>
      <Stack as="footer" backgroundColor="black" color="white" paddingX={6} paddingY={3}>
        <Container maxWidth="5xl">
          <Stack alignItems="center" direction="row" justifyContent="space-between" spacing={6}>
            <Text fontSize="xl" fontWeight="bold">
              Theorem
            </Text>
            <Text fontWeight="500">
              Copyright 2020 <b>Theorem</b>, LLC. All Rights Reserved.
            </Text>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};

export default App;
