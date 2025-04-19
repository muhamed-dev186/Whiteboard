import { ZegoSuperBoardManager , ZegoSuperBoardTool } from "zego-superboard-web";
import { ZegoExpressEngine } from "zego-express-engine-webrtc";
import { useEffect, useState } from "react";
import ToolBox from "./ToolBox";

const App = () => {
  const [currentTool,setCurrentTool] = useState(null);
  const appID = parseInt(import.meta.env.VITE_ZEGO_APP_ID),
    serverUrl = import.meta.env.VITE_ZEGO_SERVER_URL,
    userID = "12345",
    roomID = "67890",
    userName = "testUser",
    token =
      "04AAAAAGgE1woADOnrWYREFmOR7u87bwCwHQdJ+SMrneKgWyBK8GNibVH6tqVpDavKfVkUfb8pTDF+v7ZnOMv+kEcZvF9afw4ZJuALAa6I5mIyx1bR6Hp73o3G90kRjkDgtZ99l0IlbMIU4jvruW9lE63MuGZjRUIPmAHdi7+eLKLkAJKUIUMRLiS5QoAHM4xsYlw3Sq71tcrc1L9c7dRXMYcCBfRVgomFUPYT39qxw6sBVZHR+JaWqOAbic+7U+7v+5v2cPF56sUB";

  const zg = new ZegoExpressEngine(appID, serverUrl);
  const zegosuperboard = ZegoSuperBoardManager.getInstance();

  useEffect(() => {
    const initSuperBoard = async () => {
      await zegosuperboard.init(zg, {
        parentDomID: "superboard",
        appID,
        userID,
        token,
      });
      setCurrentTool(zegosuperboard.getToolType());

      await zg.loginRoom(
        roomID,
        token,
        { userID, userName },
        { userUpdate: true }
      );

      await zegosuperboard.createWhiteboardView({
        name: "My learning platform",
        perPageWidth: 1600,
        perPageHeight: 900,
        pageCount: 5,
      });
    };

    if (zegosuperboard) {
      initSuperBoard();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zegosuperboard]);

  return (
    <div className="app">
      <div id="superboard"></div>
     < ToolBox
     currentTool={currentTool}
      onClick={(tool)=>{
        zegosuperboard.setToolType(tool.type);
        setCurrentTool(tool.type);
     }}/>
    </div>
  );
};

export default App;
