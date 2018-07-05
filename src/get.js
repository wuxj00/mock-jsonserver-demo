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

const name = '四川';
http.get(`/mock1?_start=0&_limit=10`).then((info) => {
    console.log(info);
});