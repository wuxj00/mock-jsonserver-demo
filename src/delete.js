/**
 * File Created by wxj at 2018/7/5.
 * Copyright 2016 CMCC Corporation Limited.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of
 * ZYHY Company. ("Confidential Information").  You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license.
 *
 *
 * @Desc
 * @author wxj
 * @date 2018/7/5
 * @version
 */
import http from './common/http';

const id = '3';
http.delete(`/mock1/${id}`,{
    headers:{
        'Content-Type': "application/json"
    }
}).then((info) => {
    console.log('delete',info);
});