import profileLogo from "../../../assets/images/profile_logo.svg"
import { StyledSettingsContent } from "../../../styles/settings.styles";

const Notification = () => {
    return (
        <StyledSettingsContent>
            <div>
                <img src={profileLogo} alt="icon" />
                <h3>Notification</h3>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio qui culpa nobis, aperiam ad voluptate, fugiat quis fugit cupiditate voluptatum minima, quae soluta dolor recusandae error dignissimos perferendis quos animi sapiente accusamus. Officiis, illo. Doloribus sequi omnis culpa non ad vitae ipsum veritatis libero temporibus ullam cumque voluptate, error alias?</p>
            </div>
        </StyledSettingsContent>
    )
}

export default Notification;