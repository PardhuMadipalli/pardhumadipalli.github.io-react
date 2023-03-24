import React from 'react'
import { Grid, Link, Box } from "@mui/material"

const IntroductionComp = ({linkName, linkUrl, text}) => {
    return (
        <Grid item xs={10} sm={4} sx={{ border: 1, borderColor:'red', backgroundColor:'green', paddingBottom:"10px"}}>
            <p>{text}</p>
            <Box sx={{ textAlign: 'center'}}>
                <Link href={linkUrl} variant="button" color="whitesmoke" sx={{border: 1, padding:'5px'}} underline="none">{linkName}</Link>
            </Box>
        </Grid>
    )
}

const MoreIntroduction = ({linkLabel, linkUrl, ...restProps}) => {
    return (
        <>
        <Grid item xs={10} sm={8} sx={{ border:1, borderColor: 'red', backgroundColor:'yellow', padding:"15px"}}>
            {restProps.children}
            <Box textAlign="center">
                <Link href={linkUrl} variant="button" underline="none">{linkLabel}</Link>
            </Box>
        </Grid>
        </>
    )
}

const HomePage = () => {
    const firstText = "I am a software engineer"
    const volText = "I am a volunteer at this NGO"

    return (
<>      
        <Grid container justifyContent="center" direction="column" rowSpacing={5}>
            <Grid item container justifyContent="space-evenly">
                <IntroductionComp linkName="Software" linkUrl="/software" text={firstText} />
                <IntroductionComp linkName="Volunteering" linkUrl="/volunteer" text={volText} />
            </Grid>
            <Grid item container justifyContent="space-evenly">
                <MoreIntroduction linkLabel="Click to know more" linkUrl="/volunteering">
                    <p>This is more about me.</p>
                    <p>Some more news about me</p>
                </MoreIntroduction>
            </Grid>
        </Grid>

        <Grid container justifyContent="center" direction="column" rowSpacing={5}>
            <Grid item container justifyContent="space-evenly">
                <IntroductionComp linkName="Software" linkUrl="/software" text={firstText} />
                <IntroductionComp linkName="Volunteering" linkUrl="/volunteer" text={volText} />
            </Grid>
            <Grid item container justifyContent="space-evenly">
                <MoreIntroduction linkLabel="Click to know more" linkUrl="/volunteering">
                    <p>This is more about me.</p>
                    <p>Some more news about me</p>
                </MoreIntroduction>
            </Grid>
        </Grid>

        <Grid container justifyContent="center" direction="column" rowSpacing={5}>
            <Grid item container justifyContent="space-evenly">
                <IntroductionComp linkName="Software" linkUrl="/software" text={firstText} />
                <IntroductionComp linkName="Volunteering" linkUrl="/volunteer" text={volText} />
            </Grid>
            <Grid item container justifyContent="space-evenly">
                <MoreIntroduction linkLabel="Click to know more" linkUrl="/volunteering">
                    <p>This is more about me.</p>
                    <p>Some more news about me</p>
                </MoreIntroduction>
            </Grid>
        </Grid>
</>
    )
}

export default HomePage