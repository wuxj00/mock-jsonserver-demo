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

http.post('/mock1',{
    id: `1a6d970e-abd8-8b44-50b1-9714d2525c4b${Math.random()*100}`,
    name:'hello',
    value: '213'
},{
    headers:{
        'Content-Type': "application/json"
    }
}).then((info) => {
    console.log('post',info);
});