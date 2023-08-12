import {useState, useEffect} from "react";
import {Box, Stack, Typography} from "@mui/material";
import {SideBar, Videos} from "./index";
import {fetchFromAPI} from "../utils/fetchFromApi";
import YoutubeMagic from "../utils/skeletons/YoutubeMagic";
const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
            setVideos(data.items)
        }).finally(()=>setLoading(false))
    }, [selectedCategory]);

    return (
        <Stack sx={{flexDirection: {sx: 'column', md: "row"}}}>
            <Box sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
                <SideBar
                    selectedCategory={{setSelectedCategory}}
                    setSelectedCategory={setSelectedCategory}
                />
                {/*<Typography className="copyright" variant="body2" sx={{mt:1.5,color:'#fff'}}/>*/}
            </Box>
            <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
                <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white'}}>
                    {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
                </Typography>

                {loading?<YoutubeMagic/>:<Videos videos={videos}/>}
            </Box>



        </Stack>
    )
}

export default Feed;