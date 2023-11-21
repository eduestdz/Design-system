import { Box, Grid, Typography } from '@mui/material'
import React, { FC } from 'react'

const Grilla: FC = () => {

    const styles = {
        content: {
            display: 'flex',
            flexDirection: 'column',
            margin: '16px',
            border: '1px solid grey',
        },
        typography: {
            flex: 1,
            padding: '16px',
        },
        box: {
            height: 42,
            background: '#BE2F27',
        },
    };

    return (
        <Grid display='flex'>
            {/* GRID-1 */}
            <Grid item xs sx={styles.content}>
                <Typography style={styles.typography}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquid.
                </Typography>
                <Box style={styles.box}>
                </Box>
            </Grid>
            {/* GRID-2 */}
            <Grid item xs sx={styles.content}>
                <Typography style={styles.typography}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquid.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquid.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquid.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquid.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquid.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquid.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquid.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquid.

                </Typography>
                <Box style={styles.box}>
                </Box>
            </Grid>
            {/* GRID-3 */}
            <Grid item xs sx={styles.content}>
                <Typography style={styles.typography}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquid.
                </Typography>
                <Box style={styles.box}>
                </Box>
            </Grid>
            {/* GRID-4 */}
            <Grid item xs sx={styles.content}>
                <Typography style={styles.typography}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquid.
                </Typography>
                <Box style={styles.box}>
                </Box>
            </Grid>
        </Grid>

    )
}

export default Grilla
