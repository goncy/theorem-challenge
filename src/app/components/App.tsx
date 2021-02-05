import React from "react";
import {Avatar, Link as BaseLink, Container, Stack, Text} from "@chakra-ui/react";
import {Link, NavLink, Redirect, Route, Switch} from "react-router-dom";

import {Provider as FeedbackProvider} from "../../feedback/context";
import ShareScreen from "../../feedback/screens/Share";
import HistoryScreen from "../../feedback/screens/History";
import WizardScreen from "../../feedback/screens/Wizard";
import NotFoundScreen from "../screens/NotFound";
import CompletedScreen from "../../feedback/screens/Completed";
import {useSession} from "../../session/hooks";

const App: React.FC = () => {
  const [user, logout] = useSession();

  return (
    <Stack height="100%" spacing={0}>
      <Stack as="header" backgroundColor="gray.100" boxShadow="sm" paddingX={6}>
        <Container maxWidth="5xl">
          <Stack alignItems="center" direction="row" spacing={24}>
            <Link to="/">
              <Text fontSize="xl" fontWeight="bold">
                Honesto
              </Text>
            </Link>
            <Stack direction="row" flex={1} fontWeight="500" spacing={12}>
              <NavLink to="/">
                <Text paddingY={6}>Share feedback</Text>
              </NavLink>
              <NavLink to="/history">
                <Text paddingY={6}>My feedback</Text>
              </NavLink>
            </Stack>
            <Stack alignItems="center" direction="row">
              <Avatar src={user.avatar} />
              <Stack spacing={0}>
                <Text>
                  {user.firstName} {user.lastName}
                </Text>
                <BaseLink
                  color="gray.500"
                  fontSize="xs"
                  fontWeight="bold"
                  textTransform="uppercase"
                  onClick={logout}
                >
                  Logout
                </BaseLink>
              </Stack>
            </Stack>
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
      <Stack as="footer" backgroundColor="gray.800" color="white" paddingX={6} paddingY={3}>
        <Container maxWidth="5xl">
          <Stack alignItems="center" direction="row" justifyContent="space-between" spacing={6}>
            <Text fontFamily="serif" fontSize="2xl" fontWeight="500">
              Theorem
            </Text>
            <Text fontSize="xs" fontWeight="500">
              Copyright 2020 <b>Theorem</b>, LLC. All Rights Reserved.
            </Text>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};

export default App;
