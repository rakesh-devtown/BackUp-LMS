import { useEffect, useState } from 'react';
import { StyledContentText } from '../../styles/videoPage.styles';
import useBatchStore from '../../store/batchStore';
import DOMPurify from 'dompurify';

const ClassNotes = () => {

    const currentVideo = useBatchStore(state=>state.currentVideo);
    const [richText, setRichText] = useState('');
    useEffect(() => {
        if (currentVideo) {
            setRichText(DOMPurify.sanitize(currentVideo?.note));
        }
    }, [currentVideo]);

    return (
        <>
            <StyledContentText id='classNotes'>
                {
                    richText &&
                    <>
                    <div style={{paddingBottom:'10px'}}>
                        <h4>Class Notes</h4>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: richText }} />
                    </>
                }
            </StyledContentText>
        </>
    )
}

export default ClassNotes;
