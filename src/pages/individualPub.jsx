import React from "react";
import { 
    List,
    ListItem, 
    Typography,
    Box, 
    Container,
    Link} from "@mui/material";

const SegmentHeading = ({heading}) =>
    <Typography component="h2" variant="h5">{heading}</Typography>

function PubInitialDetails({pub}) {
    return (
        <>
            <SegmentHeading heading="Authors"/>
            <List>
                {pub.authors.map((auth) => <ListItem>{auth}</ListItem>)}
            </List>
        </>
    )
}

function PubFinalDetails({pub}) {
    return (
        <>
            <SegmentHeading heading="Abstract"/>
            <Box my={1}>
                {pub.abstract.map((para) => <Typography paragraph>{para}</Typography>)}
            </Box>
            <SegmentHeading heading="Citation"/>
            <Typography component="pre" variant="pre">{pub.citation}</Typography>
        </>
    )
}

function PubJournalDetails({pub}) {
    return (
        <>
            <Typography component="h2" variant="h6">{pub.publication.type}</Typography>
            <Box>
                <Typography component="span" variant="body1">{pub.publication.name}</Typography>
                <Typography variant="body2">{pub.publication.date}</Typography>
                <br></br>
            </Box>

            <Typography variant="body1" component="span">DOI: </Typography>
            <Link href={pub.publication.doi.number}>{pub.publication.doi.number}</Link>
            <br></br>
        </>
    )
}

function Pub({pub}) {
    return (
        <>  
            <Container maxWidth='lg'>
                <Typography component="h1" variant="h2">{pub.title}</Typography>
                <PubInitialDetails pub={pub}/>
                <Box sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],

                        p:2
                    }}>
                    <PubJournalDetails pub={pub} />
                </Box>
                <PubFinalDetails pub={pub}/>
            </Container>
        </>
    )
}

export default function pubs() {
    const pubs = [
        {
            stub : "first",
            title: "This is title",
            authors: ['Nagaraj', 'Pardhu Madipalli'],
            publication: {
                type: "Journal",
                name: "Biomedical journal",
                date: "July 2017",
                doi: {
                    number: "numer",
                    url: "jshajshajsh"
                }
            },
            abstract: ["para", "para", "para"],
            citation: "nvjhgjhgjhgjhgjhgjhgjhgjhg \njhgkugjkghjghg"
        }, 
        {
            stub: "second",
            title: "This is second title",
            authors: ['Nagaraj', 'Pardhu Madipalli'],
            publication: {
                type: "Conference",
                name: "IEEE conference",
                date: "July 2017",
                doi: {
                    number: "number",
                    url: "hsajhsajhs"
                }
            },
            abstract: ["para", "para", "para"],
            citation: "nvjhgjhgjhgjhgjhgjhgjhgjhg"
        }
    ]
    const pubsArray = []
    pubs.forEach((pub) => {pubsArray.push([pub.stub, <Pub pub={pub}/>])})
    return pubsArray
} 