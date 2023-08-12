import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Box} from "@mui/material"
import {Videos, ChannelCard} from "./index";
import {fetchFromAPI} from "../utils/fetchFromApi";

const ChanelDetail = () => {


    const {id} = useParams();
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

            setChannelDetail(data?.items[0]);

            const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

            setVideos(videosData?.items);
        };
        fetchResults();
    }, [id])
    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    background: "linear-gradient(90deg, rgba(18,126,99,1) 13%, rgba(117,37,209,1) 45%, rgba(255,0,202,1) 63%, rgba(143,203,190,1) 92%)",
                    zIndex: 10,
                    height: "300px"
                }}/>
                <ChannelCard channelDetail={channelDetail} marginTop="-110px" channelId={id}/>
            </Box>
            <Box display="flex" p="2">
                <Box  sx={{mr: {sm: "100px"} }}/>
                <Videos videos={videos}/>
            </Box>
        </Box>
    )
}

export default ChanelDetail;