import {Fragment} from "react";
import { useParams } from "react-router-dom";
import ".//pp.styles.css";

const PrivacyPolicy = () => {

    const {appname} = useParams();

    return(
        <Fragment>
            <div className="policyWrapper">
                <div className="policyCard">
                    <p className="policyTitle">Privacy Policy for {appname}</p>
                    <p className="policyText">
                        This Privacy Policy outlines how LunaSyz ("we," "us," or "our") handles user information when you use our mobile application ("the App"). By downloading and using the App, you agree to the terms outlined in this policy.
                        <br/><br/>
                        1. Location Data:
                        <br/>
                        The App utilizes location access solely for retrieving weather data related to celestial events. We do not store or track your location information. Location data is used in real-time, and no historical location information is retained.
                        <br/><br/>
                        2. Storage Access:
                        <br/>
                        The App requests access to your device's storage to download and save Astro Photo of the Day images. We do not access, collect, or store any personal files or data from your device's storage. The downloaded images are solely for in-app display and user enjoyment.
                        <br/><br/>
                        3. User Data Collection:
                        <br/>
                        LunaSyz does not collect or store any personal information or user data. We respect your privacy, and our commitment is to provide a secure and enjoyable experience without compromising your personal information.
                        <br/><br/>
                        4. Third-Party Services:
                        <br/>
                        The App may contain links to third-party websites or services, such as the Astro Photo of the Day source. Please note that these external services have their privacy policies, and we encourage you to review them independently.
                        <br/><br/>
                        5. Children's Privacy:
                        <br/>
                        The App is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to remove such information.
                        <br/><br/>
                        6. Changes to the Privacy Policy:
                        <br/>
                        We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected in this document, and your continued use of the App after such modifications will constitute your acknowledgment and acceptance of the updated Privacy Policy.
                        <br/><br/>
                        Contact Us:
                        <br/>
                        If you have any questions or concerns about this Privacy Policy or the App, please contact us at developer.smallgames@gmail.com.
                        <br/><br/>
                        This Privacy Policy was last updated on 1st January 2024.
                    </p>
                </div>
            </div>
        </Fragment>
    );

};

export default PrivacyPolicy;