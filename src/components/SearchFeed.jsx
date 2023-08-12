import {useState, useEffect} from "react";
import {Box, Stack, Typography} from "@mui/material";
import {Videos} from "./index";
import {fetchFromAPI} from "../utils/fetchFromApi";
import {useParams} from "react-router-dom";
import YoutubeMagic from "../utils/skeletons/YoutubeMagic";

const SearchFeed = () => {

    const [videos, setVideos] = useState(null);
    const [loading, setLoading] = useState(true);
    const {searchTerm} = useParams();

    useEffect(() => {
        setLoading(true)

        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
            setVideos(data.items)
        }).finally(() => setLoading(false))
    }, [searchTerm]);

    return (
        <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white'}}>
                Search Results for: <span style={{color: "#FC1503"}}> {searchTerm}</span>  videos
            </Typography>
            {loading ?<YoutubeMagic/>:<Videos videos={videos}/>}
        </Box>

    )
}

export default SearchFeed;