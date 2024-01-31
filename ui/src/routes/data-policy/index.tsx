import {Fragment} from "react";
import { useParams } from "react-router-dom";
import ".//pp.styles.css";

const DataPolicy = () => {

    const {appname} = useParams();

    return(
        <Fragment>
            <div className="policyWrapper">
                <div className="policyCard">
                    <p className="policyTitle">Data Policy for {appname}</p>
                    <p className="policyText">
                        This Data Policy outlines how LunaSyz ("we," "us," or "our") handles user data when you use our mobile application ("the App"). By downloading and using the App, you agree to the terms outlined in this policy.
                        <br/><br/>
                        1. Location Data:
                        <br/>
                        LunaSyz utilizes location access to enhance your experience within the app. Location data is used to provide specific celestial information tailored to your geographic location. We do not store or track your location information beyond the immediate usage within the app.
                        <br/><br/>
                        2. Storage Access:
                        <br/>
                        The App requests access to your device's storage to facilitate certain features, such as saving user preferences or downloaded content. LunaSyz does not access, collect, or store any personal files or data from your device's storage without your explicit consent.
                        <br/><br/>
                        3. User Data Collection:
                        <br/>
                        LunaSyz is committed to user privacy. The app does not collect or store any personally identifiable information about its users. Any data generated within the app, such as user preferences or settings, is stored locally on your device and is not transmitted to external servers.
                        <br/><br/>
                        4. Third-Party Services:
                        <br/>
                        The App may integrate third-party services for specific functionalities, such as weather data or celestial event information. While these services enhance the app's features, please be aware that they have their privacy policies. LunaSyz is not responsible for the data practices of third-party services.
                        <br/><br/>
                        5. Children's Privacy:
                        <br/>
                        LunaSyz is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to remove such information.
                        <br/><br/>
                        6. Changes to the Data Policy:
                        <br/>
                        We reserve the right to update or modify this Data Policy at any time. Any changes will be reflected in this document, and your continued use of the App after such modifications will constitute your acknowledgment and acceptance of the updated Data Policy.
                        <br/><br/>
                        Contact Us:

                        If you have any questions or concerns about this Data Policy or LunaSyz, please contact us at developer.smallgames@gmail.com.

                        This Data Policy was last updated on 1st January, 2024.
                    </p>
                </div>
            </div>
        </Fragment>
    );

};

export default DataPolicy;