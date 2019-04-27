import React from 'react';
// import { Box, Button, Heading, Grommet, Collapsible } from 'grommet';
import {
   Box,
   Button,
   Collapsible,
   Heading,
   Grommet,
   Layer,
   ResponsiveContext,
   Stack,
   Text,
  } from 'grommet';
import { FormClose, Notification } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    />
  );

class App extends React.Component {
  state = {
    showSidebar: false,
  }
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
   {size => (
        <Box fill>
          <AppBar>
            <Heading level='3' margin='none'>My App</Heading>
            <Button
              onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))}
            >
              <Stack anchor="top-right">
                <Notification size="large" />
                <Box
                  background="status-critical"
                  pad={{ horizontal: 'xsmall' }}
                  round
                >
                  <Text>8</Text>
                </Box>
              </Stack>
            </Button>
          </AppBar>
          <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
            <Box flex align='center' justify='center'>
              app body
            </Box>
            {(!showSidebar || size !== 'small') ? (
              <Collapsible direction="horizontal" open={showSidebar}>
                <Box
                  flex
                  width='medium'
                  background='light-2'
                  elevation='small'
                  align='center'
                  justify='center'
                >
                  sidebar
                </Box>
              </Collapsible>
            ) : (
              <Layer>
                <Box
                  background='light-2'
                  tag='header'
                  justify='end'
                  align='center'
                  direction='row'
                >
                  <Button
                    icon={<FormClose />}
                    onClick={() => this.setState({ showSidebar: false })}
                  />
                </Box>
                <Box
                  fill
                  background='light-2'
                  align='center'
                  justify='center'
                >
                  sidebar
                </Box>
              </Layer>
            )}
            </Box>
          </Box>
        )}
       </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
