import { useEffect, useState } from 'react';
import useBatchStore from '../../store/batchStore';
import { StyledContentText } from '../../styles/videoPage.styles';
import DOMPurify from 'dompurify';

const Description = () => {
    const currentVideo = useBatchStore(state=>state.currentVideo);
    const [richText, setRichText] = useState('');
    useEffect(() => {
        if (currentVideo) {
            setRichText(DOMPurify.sanitize(currentVideo.content));
        }
    }, [currentVideo]);
    return (
        <>
            <StyledContentText id='description'>
                <div style={{paddingBottom:'10px'}}>
                    <h4>Description</h4>
                </div>
                <div dangerouslySetInnerHTML={{ __html: richText }} />
            </StyledContentText>
        </>
    )
}

export default Description;
