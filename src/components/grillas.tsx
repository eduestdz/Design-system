import { Grid, Paper, Stack } from '@mui/material'
import { grey } from '@mui/material/colors';
import React, { FC } from 'react'

const Grilla: FC = () => {

    const styles = {
        gridContainer: {
            //  minHeight: '100vh',
            alignItems: 'stretch'
        },
        content: {
            flex: 1,
            padding: '16px',
            alignItems: 'stretch'
        },
    };

    return (
        <Grid container direction="row" style={styles.gridContainer} >
            {/* Cuadrícula 1 */}
            <Grid item xs style={styles.content}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, aliquid.
                <Grid item sx={{
                    height: 42, background: '#BE2F27',
                }}>
                </Grid>
            </Grid>

            <Grid item xs style={styles.content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nemo.
                <Grid item sx={{
                    height: 42, background: '#BE2F27',
                }}>
                </Grid>
            </Grid>
            <Grid item xs style={styles.content}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nisi.
                <Grid item sx={{
                    height: 42, background: '#BE2F27',
                }}>
                </Grid>
            </Grid>
            <Grid item xs style={styles.content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, soluta.
                <Grid item sx={{
                    height: 42, background: '#BE2F27',
                }}>
                </Grid>
            </Grid>
            <Grid item xs style={styles.content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquam perferendis adipisci placeat, saepe reprehenderit sed magnam deserunt eligendi blanditiis aut inventore tempore corrupti hic velit illo voluptatem minima iure ad ab eos
                <Grid item sx={{
                    height: 42, background: '#BE2F27',
                }}>
                </Grid>
            </Grid>
            <Grid item xs style={styles.content}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, natus.
                <Grid item sx={{
                    height: 42, background: '#BE2F27',
                }}>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Grilla
