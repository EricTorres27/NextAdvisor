import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box,Container,TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Informacion personal', 'Informacion Academica', 'Rol'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <div>
                <Box align="left">
                    <Typography>Nombre</Typography>
                    <TextField id="outlined-basic" label="Gustavo" variant="outlined" />
                </Box>
                <Box align="left">
                    <Typography>Apellido Paterno</Typography>
                    <TextField id="outlined-basic" label="León" variant="outlined" />
                </Box>
                <Box align="left">
                    <Typography>Apellido Materno</Typography>
                    <TextField id="outlined-basic" label="Carrillo" variant="outlined" />
                </Box>
                <Box align="left">
                    <Typography>Telefono</Typography>
                    <TextField id="outlined-basic" label="Carrillo" variant="outlined" />
                </Box>
                <Box align="left">
                    <Typography>Correo</Typography>
                    <TextField id="outlined-basic" label="Carrillo" variant="outlined" />
                </Box>
                <Box align="left">
                    <Typography>Contraseña</Typography>
                    <TextField id="outlined-basic" label="Carrillo" variant="outlined" />
                </Box>
            </div>
        case 1:
            return <div>

            </div>
        case 2:
            return <div>

            </div>
        default:
            return 'Unknown stepIndex';
    }
}

const CreateUser = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    
    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                        <Container maxWidth="sm">
                            <form>
                            <Typography align="center" className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            </form>
                            <div align="center">
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >
                                    Atras
              </Button>
                                <Button variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Terminar' : 'Siguiente'}
                                </Button>
                            </div>
                        </Container>
                    )}
            </div>
        </div>
    )
}

export default CreateUser
