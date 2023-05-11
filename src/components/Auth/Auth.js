import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Login from './Tabs/Login';
// __ __ Components/Helpers __ __ //
import SignUp from './Tabs/Signup';


const Auth = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <>

            <Tabs className="theme_tabs_wrapper " selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className='container mx-auto'>
                    <div className='header'>
                        <h4 className="font-bold text-xl md:text-start text-center sm:text-2xl  text-white captilize py-7">Datacense</h4>
                    </div>
                    <div className="min-h-screen screen-min-height flex flex-col items-center justify-center">

                        <div className="form-wraper xl:max-w-xl lg:max-w-lg xs:max-w-xs flex flex-col bg-white shadow-md px-8 sm:px-10  lg:px-16 py-12 rounded-md w-full">
                            <TabList className="login-butn text-center  flex items-center justify-center">
                                <Tab className="f-size-16 hover:bg-violet-600 font-bold login-color pb-4 relative top-px cursor-pointer button-signups">
                                    Login
                                </Tab>
                                <Tab className="f-size-16 font-bold login-color ml-11 pb-4 relative top-px cursor-pointer text-center button-signups ">
                                    Register
                                </Tab>
                            </TabList>
                            <TabPanel>
                                <Login />
                            </TabPanel>
                            <TabPanel>
                                <SignUp setTabIndex={setTabIndex} />
                            </TabPanel>
                        </div>
                    </div>
                </div>
            </Tabs>
        </>
    )
}

export default Auth