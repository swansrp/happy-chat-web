import Api from "../api/api";
import * as types from "./mutation-types";

// chatRobot
export const chatRobot = ({commit},params) => {
  return Api.chatRobot(params).then(res => {
    if (res) {
      if (res.data.code === 100000) {
        commit(types.robotMsgMutation, {
          message: res.data.text,
          user: "robot"
        });
      } else if (res.data.code === 200000) {
        let data = res.data.text + res.data.url;
        commit(types.robotMsgMutation, {
          message: data,
          user: "robot"
        });
      } else if (res.data.code === 302000) {
        commit(types.robotMsgMutation, {
          message: "暂不支持此类对话",
          user: "robot"
        });
      } else {
        commit(types.robotMsgMutation, {
          message: "暂不支持此类对话",
          user: "robot"
        });
      }
    }
  }).catch(err => {
      console.log(err);
  });
};

/*注册-未激活*/
export const register = ({commit},params) => {
  return Api.register(params).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
  });
};
/*注册-激活*/
export const activateEmail = ({commit},params) => {
  return Api.activateEmail(params).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
  });
};
/*登陆*/
export const login = ({commit},params) => {
  return Api.login(params).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
  });
};

/*查找人*/
export const findPerson = ({commit},params) => {
  return Api.findPerson(params).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
  });
};

/*获取用户资料*/
export const queryUserInfo = ({commit},params) => {
  return Api.queryUserInfo(params).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
  });
};

/*获取用户资料-special*/
export const queryUserInfoSpecial = ({commit},params) => {
  return Api.queryUserInfo(params).then(res => {
    console.log(res, '---------------------------------------------')
    commit(types.someOneInfoMutation, res.data.userInfo[0]);
  }).catch(err => {
    console.log(err);
  });
};

/*获取新朋友列表*/
export const getNewFriends = ({commit},params) => {
  return Api.getNewFriends(params).then(res => {
    console.log(res, '---------------------------------------------')
    commit(types.newFriendMutation, res.data.newFriends);
  }).catch(err => {
    console.log(err);
  });
};

/*查询此用户是否是我的好友*/
export const isFriendJudge = ({commit},params) => {
  return Api.isFriendJudge(params).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
  });
};

/*消息首页列表*/
export const messageList = ({commit},params) => {
  return Api.messageList(params).then(res => {
    console.log("res", res);
    if (res.success) {
      const groupList = res.data.groupList;
      const privateList = res.data.privateList;
      groupList.forEach(element => {
        element.type = "group";
        element.time = element.time ? element.time : element.creater_time;
        element.id = element.group_id;
      });
      privateList.forEach(element => {
        element.type = "private";
        element.time = element.time ? element.time : element.be_friend_time;
        element.id = element.other_user_id;
        // element.unread = 0;
      });
      const allMsgList = groupList.concat(privateList);
      allMsgList.sort((a, b) => {
        return b.time - a.time;
      });
      commit(types.msgListMutation, allMsgList);
    }
  }).catch(err => {
    console.log(err);
  });
};

/*插入新的朋友*/
export const insertNewFriends = ({commit},params) => {
  return Api.insertNewFriends(params).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
  });
};

/*加为好友*/
export const beFriends = ({commit},params) => {
  return Api.beFriends(params).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
  });
};

/*更新好友状态*/
export const updateNewFriendsState = ({commit},params) => {
  return Api.updateNewFriendsState(params).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
  });
};
/*获取数据库私聊消息*/
export const getPrivateDetail = ({commit},params) => {
  return Api.getPrivateDetail(params).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
  });
};
/*存此条私聊信息到数据库*/
export const savePrivateMsg = ({commit},params) => {
  return Api.savePrivateMsg(params).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
  });
};

