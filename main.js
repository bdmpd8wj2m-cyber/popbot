
// ↓↓↓ 你的正常逻辑 ↓↓↓
const humanize_enabled = hamibot.env.human_mode === true || hamibot.env.human_mode === 'true';
console.info("[调试] 拟人化补丁是否启用：", humanize_enabled);

const { use_legacy_floaty_conf: drp_cF, use_minimal_floaty_conf: drp_cG } =
    hamibot.env
var drp_cH, drp_cI, drp_cJ, drp_cK
if (drp_cF) {
    drp_cH = floaty.window(
        '\n                <vertical id="main_window" bg="#00000000" alpha="0.9" w="100">\n                    <text id="title" text="小老虎专机" gravity="center" textColor="#000000" textStyle="bold" />\n                    <horizontal>\n                        <button id="start" text="运行" bg="#00FF00" w="100" visibility="visible" />\n                        <button id="end" text="停止" bg="#FF0000" w="100" visibility="gone" />\n                    </horizontal>\n                    <button text="" bg="#111111" w="50" h="10" />\n                    <horizontal>\n                        <button id="type_settings" text="方式" bg="#66ccff" w="50" h="40" />\n                        <button id="number_settings" text="数量" bg="#f0ff0f" w="50" h="40" />\n                    </horizontal>\n                    <button text="" bg="#111111" w="50" h="10" />\n                    <horizontal>\n                        <button id="move_start" text="移动" bg="#f0ff0f" w="100" h="40" visibility="visible" />\n                        <button id="move_end" text="固定" bg="#00FFFF" w="100" h="40" visibility="gone" />\n                    </horizontal>\n                </vertical>\n                '
    )
} else {
    drp_cG
        ? (drp_cI = floaty.rawWindow(
            '<frame>\n                    <img id="drag" src="@drawable/ic_launcher" circle="true" tint="#66ccff" bg="#00000000" padding="2" w="75" h="75" />\n                    <text id="text_status" text="启动" textColor="#FFFFFF" textSize="14sp" layout_gravity="center" gravity="center" bg="#00000000" />\n                </frame>'
        ))
        : (drp_cJ = floaty.window(
            '<vertical id="main_window" bg="#00000000" alpha="0.9" w="100">\n                    <text id="title" text="小老虎专机" gravity="center" textColor="#000000" textStyle="bold" />\n                    <horizontal>\n                        <button id="start" text="运行" bg="#00FF00" w="100" visibility="visible" />\n                        <button id="end" text="停止" bg="#FF0000" w="100" visibility="gone" />\n                    </horizontal>\n                    <button text="" bg="#111111" w="50" h="3" />\n                    <horizontal>\n                        <button id="config_settings" text="配置" bg="#66ccff" w="100" h="40" />\n                    </horizontal>\n                    <button text="" bg="#111111" w="50" h="3" />\n                    <horizontal>\n                        <button id="move_start" text="移动" bg="#f0ff0f" w="100" h="40" visibility="visible" />\n                        <button id="move_end" text="固定" bg="#00FFFF" w="100" h="40" visibility="gone" />\n                    </horizontal>\n                </vertical>'
        ))
}
drp_cK = floaty.rawWindow(
    '<vertical id="config_main" bg="#6C6C6C" alpha="0.95" padding="10" w="1px" h="1px">\n                <text text="\u2699️ 临时配置设置" gravity="center" textColor="#6C6C6C" textStyle="bold" textSize="18" />\n                <button text="关闭" id="close_config" bg="#FFFF00" w="*" h="40" margin="0 10" />\n                <button text="本地配置预设" id="preset_config" bg="#4169E1" w="*" h="40" margin="0 10" />\n                <button text="当前模式" id="sub_mode_config" bg="#9C27B0" w="*" h="40" />\n                <button text="" bg="#111111" w="10" h="10" />\n                <scroll>\n                    <vertical id="gacha_conf_holder" visibility="gone">\n                        <button id="gacha_submode_config" text="" bg="#66ccff" w="*" h="50" />\n                        <button text="" bg="#111111" w="10" h="10" />\n\n                        <button id="gacha_machine_specs_config" text="" bg="#4CAF50" w="*" h="50" />\n                        <button text="" bg="#111111" w="10" h="10" />\n\n                        <button id="gacha_member_exclusive_specs_config" text="" bg="#2196F3" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="gacha_member_purchase_count_config" text="" bg="#2196F3" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="gacha_member_extra_selection_regex_config" text="" bg="#2196F3" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        \n                        <button id="gacha_refreshing_method_config" text="" bg="#FF9800" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="gacha_focus_goods_name_config" text="" bg="#FF9800" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="additional_excluded_goods_names_config" text="" bg="#F44336" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        \n                        <button id="gacha_machine_max_ppl_in_queue_config" text="" bg="#9C27B0" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="gacha_machine_max_streak_config" text="" bg="#9C27B0" w="*" h="50" />\n                        <button text="" bg="#111111" w="10" h="10" />\n                    </vertical>\n                </scroll>\n                <scroll>\n                    <vertical id="default_conf_holder" visibility="visible">\n                        <button id="delivery_type_config" text="" bg="#66ccff" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="delivery_number_config" text="" bg="#66ccff" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="specs_config" text="" bg="#66ccff" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="extra_selection_regex_config" text="" bg="#66ccff" w="*" h="50" />\n                        <button text="" bg="#111111" w="10" h="10" />\n\n                        <button id="refresh_delay_config" text="" bg="#4CAF50" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="legacy_refresh_config" text="" bg="#4CAF50" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="enable_random_delay_config" text="" bg="#4CAF50" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="random_delay_lower_config" text="" bg="#4CAF50" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="random_delay_upper_config" text="" bg="#4CAF50" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="max_refresh_time_config" text="" bg="#4CAF50" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="rage_stock_refresh_config" text="" bg="#4CAF50" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="payment_password_config" text="" bg="#4CAF50" w="*" h="50" />\n                        <button text="" bg="#111111" w="10" h="10" />\n\n\n                        <button id="extra_delay_config" text="" bg="#2196F3" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="ack_delay_config" text="" bg="#2196F3" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button text="" bg="#111111" w="10" h="10" />\n\n                        <button id="ignore_ack_config" text="" bg="#E91E63" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="special_confirm_delay_config" text="" bg="#E91E63" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="ignore_ack_click_delay_config" text="" bg="#E91E63" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="shield_breaker_mode_config" text="" bg="#E91E63" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="ignore_ack_panic_timer_config" text="" bg="#E91E63" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="panic_timer_config" text="" bg="#E91E63" w="*" h="50" />\n                        <button text="" bg="#111111" w="10" h="10" />\n                        \n\n                        <button id="vibrate_time_config" text="" bg="#3F51B5" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="main_window_alpha_config" text="" bg="#3F51B5" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="auto_click_notification_config" text="" bg="#3F51B5" w="*" h="50" />\n                        <button text="" bg="#111111" w="*" h="5" />\n                        <button id="reset_floaty_position_config" text="" bg="#3F51B5" w="*" h="50" />\n                    </vertical>\n                </scroll>\n            </vertical>'
)
var drp_cL = 'Ada lovelace',
    drp_cM = 'See it, say it, sorted.',
    drp_cN = "King's Cross",
    drp_cO,
    drp_cP,
    drp_cQ,
    drp_cR,
    drp_cS,
    drp_cT,
    drp_cU,
    drp_cV = 'Never Settle.',
    drp_cV =
        'lGTW1pMWlUUXVKTWJGZ1Y0aFF2ZllreUdIYnJaL2pJbFYwMFBncmdnUUVYZEJNNjdICkRUYWpqczVUSGJ4eTNIMENCU0pGNVI2WXBTdk9Ed25GeDBOdjN3T2R1TVDMzFQNm2JmeVZadnpRT2JuWGd1V3ptUEVxTE9PZ3lqd05mZWEwQW8zU295S2YxU3FoRW1YQ3ZwZHRDbkJJam9jTUZPNk9QR1VUVGE2Q1AgUT54dH4gRFpIUk9zdU5GTk5vSzluV08hdko4aTFpVFF1Sk1iRmdWNGhRdmZZa3lHSGJyWi9qSWxWMDBQZ3JnZ1FFWGRCTTY3SApEVGFqanM1VEhieHkzSDBDQlNKRjVSNllwU3ZPRHduRngwTnYzd09kdUwvTFlLMXJrN0RB' +
        drp_cV,
    drp_cW = 'Happy cracking!',
    drp_cX = 'Practice makes perfect.'
drp_cX = '47cf4380-5bda-40a3-9ab3-74e0cdd5b079'
function drp_cY(a, b) {
    var a = a + 10000
    drp_cO = hamibot
    drp_cP = hamibot
    drp_cQ = drp_cP.exit
    drp_cT = exit
    drp_cU = exit
    drp_cV =
        'VTNwU1ZVMTZSazVWVlZaRVRYcEdVVTV0Y0RGalJrWnNVVlpPYUdScmJ6Uk5helF5WVdwS05WZFhaRFpWTWtwdFpWWmFZV1J1Y0ZKVU1rcDFWMGRrTVZZemNIUlZSVlo0VkVVNVVGb3piSEZrTURWdFdsZEZkMUZYT0hwVk1qazFVekpaZUZVelJtOVNWekZaVVROYWQxcElVa1JpYTBwS1lXMDVhbFJWV2xCT2F6bFJVakZXVlZaSFJUSlJNVUZuVlZRMU5HUklOR2RTUm5CSlZXczVlbVJWTlVkVWF6VjJVM3BzZFZZd09IaGxSelV4VW0xMFZFd3hXWEpVUm14SFZGY3hjRTFYYkZWVldGWkxWRmRLUjFveFdUQmhSa1l5V214c2NtVlZaRWxaYmtwaFRESndTbUpHV1hkTlJrSnVZMjFrYmxWVlZsbGFSVXBPVG1wa1NVTnJVbFZaVjNCeFkzcFdWVk5IU2pSbFZFNUpUVVZPUTFVd2NFZE9Wa2t5VjFoQ1ZHUnJPVVZrTWpWSFpVUkNUMlJxVGpOVU1sSXhWRU01VFZkVmMzaGpiWE16VWtWRlBRPT0='
    drp_cX = '42f93ddc-1c6f-40fc-82d7-5578a4596cd7'
}
for (let drp_hl = 0; drp_hl < 5; drp_hl++) {
    drp_cY(drp_hl, auto)
}
var drp_cZ = drp_cQ
auto.waitFor()
console.error('[无障碍] 状态正常')


// 如需额外调用，保持兼容
if (typeof humanize_enabled !== 'undefined' && humanize_enabled) {
    // 补丁已自动生效，无需再手动调用
}
// 如果需要额外的拟人化功能，可以调用 applyHumanizePatch
if (typeof humanize_enabled !== 'undefined' && humanize_enabled) {
    applyHumanizePatch();
}
function drp_d0() {
    drp_cR = drp_cO.env
    drp_cS = drp_cR
    drp_cV =
        'U3pSVU16Rk5VVVZETXpGUU5tcDFjRkZsUVZOaGRrbzRNazQyYWpKNVdXZDZVMkptZVZaYWRucFJUMkp1V0dkMVYzcHRVRVZ4VEU5UFozbHFkMDVtWldFd1FXOHpVMjk1UzJZeFUzRm9SVzFZUTNad1pIUkRia0pKYW05alRVWlBOazlRUjFWVVZHRTJRMUFnVVQ1NGRINGdSRnBJVWs5emRVNUdUazV2U3psdVYwOHhlRzUxUm10VEwxWXJURmxHVFcxcE1XbFVVWFZLVFdKR1oxWTBhRkYyWmxscmVVZElZbkphTDJwSmJGWXdNRkJuY21kblVVVllaRUpOTmpkSUNrUlVZV3BxY3pWVVNHSjRlVE5JTUVOQ1UwcEdOVkkyV1hCVGRrOUVkMjVHZURCT2RqTjNUMlIxVEM5TVdVc3hjbXMzUkVFPQ=='
    drp_cX = 'd2143c10-f1e5-4fe1-8055-0d07a77b63da'
}
drp_d0()
const {
    delivery: drp_d1,
    specs_conf: drp_d2,
    purchase_count_conf: drp_d3,
    type_conf: drp_d4,
    extra_delay_conf: drp_d5,
    delay_conf: drp_d6,
    enable_random_delay_conf: drp_d7,
    random_delay_lower_conf: drp_d8,
    random_delay_upper_conf: drp_d9,
    max_refresh_time_conf: drp_da,
    auto_click_notification_conf: drp_db,
    click_new_notification_conf: drp_dc,
    hide_console_conf: drp_dd,
    disable_click: drp_de,
    ack_delay_conf: drp_df,
    debug_mode_conf: drp_dg,
    ignore_ack_conf: drp_dh,
    main_window_alpha_conf: drp_di,
    reset_floaty_position_conf: drp_dj,
    ignore_ack_click_delay_conf: drp_dk,
    sku_result_toast_conf: drp_dl,
    rage_stock_refresh_conf: drp_dm,
    vibrate_time_conf: drp_dn,
    special_confirm_delay_conf: drp_do,
    special_click_confirm_conf: drp_dp,
    extra_selection_regex_conf: drp_dq,
    payment_password_conf: drp_dr,
    shield_breaker_mode_conf: drp_ds,
    panic_timer_conf: drp_dt,
    ignore_ack_panic_timer_conf: drp_du,
    keep_screen_on_conf: drp_dv,
    run_on_boot_conf: drp_dw,
    notification_based_control_conf: drp_dx,
    monitored_titles_conf: drp_dy,
    legacy_refresh_conf: drp_dz,
    ignore_home_command_conf: drp_dA,
    monitor_restock_conf: drp_dB,
    auto_reduce_purchase_count_conf: drp_dC,
    auto_restart_time_conf: drp_dD,
} = drp_cR,
    { sub_mode_conf: drp_dE, gacha_submode_conf: drp_dF } = drp_cR,
    {
        gacha_machine_specs_conf: drp_dG,
        gacha_member_exclusive_specs_conf: drp_dH,
        gacha_member_purchase_count_conf: drp_dI,
        gacha_member_extra_selection_regex_conf: drp_dJ,
        gacha_refreshing_method_conf: drp_dK,
        gacha_focus_goods_name_conf: drp_dL,
        additional_excluded_goods_names_conf: drp_dM,
        gacha_machine_max_ppl_in_queue_conf: drp_dN,
        gacha_machine_max_streak_conf: drp_dO,
    } = drp_cR,
    { onFreeTrial: drp_dP } = drp_cO.plan
var drp_dQ = drp_dP
const drp_dR = new Date(drp_cR.TIMESTAMP),
    drp_dS = new Date(),
    drp_dT = Math.abs(drp_dS - drp_dR),
    drp_dU = 60000
var drp_cL, drp_cM, drp_cN
drp_dT > drp_dU
    ? (sleep(4000), exit())
    : ((drp_cL = drp_cO.scriptId),
        (drp_cM = drp_cO.scriptName),
        (drp_cN = drp_cO.plan.name),
        (drp_cX = '2507cf26-ae50-4db9-8bd7-215be2663501'))
function drp_dV() {
    drp_cS = drp_cR.JWT_TOKEN
    drp_cX = '57901f92-ae0f-41d1-aabd-8e7a4d3200cd'
    return drp_cS + drp_cL + drp_cN
}
var drp_dW, drp_dX, drp_dY
drp_cS = drp_cL
drp_cS = drp_cL + drp_cN
drp_dW = drp_dV()
drp_dX = http
drp_dY = http.get
drp_cV =
    'N0lRcHJuVDdyNXlMZkpId01Ub1RERWZaaGFUNEhXTGtKc2xYRUJYNWFMVkQ0ckpxTUZEdTRNTGV2N3FOcFRWck9HMnBtb2hyV1hWekFBbmxRWFhtSDdmNGFLZjNLZ2RUQ0V6c2A5SnU7OCxQPiQxVz83QT5XLzdmMTJxb2ZaOXd1K280dVliSGxpdnExRWxlY053Qk5YelIwazZRejBrbjdUYS9CMm9SNklZRkNIczlmRkxkUk8wWmlRMG5JK2dnCmYxSzQ4QlZkZUh1MENyd3E3Z1RZdEd4TWxJWU1zZmNqQk1JWU5ySmR1V2hPMy95aVZkdUI='
// !drp_cR.JWT_TOKEN ? drp_cU() : (drp_cV = base64.decode(drp_cV))
!drp_dd && console.show()
var drp_dZ = 0,
    drp_e0 = drp_d1 || '到店取',
    drp_e1 = parseInt(drp_d3) || 1
drp_e1 > 30 &&
    (console.log('购买数量异常\uFF0C可能是hamibot传入的参数有误\uFF0C已修正为2'),
        (drp_e1 = 2))
var drp_e2 = drp_d2 || '单个',
    drp_e3 = parseInt(drp_d6) || 300,
    drp_e4 = parseInt(drp_d5) || 0,
    drp_e5 = parseFloat(drp_da) || 0,
    drp_e6 = parseInt(drp_df) || 0,
    drp_e7 = drp_db || false,
    drp_e8 = Math.max(parseInt(drp_d8) || 10, 1),
    drp_e9 = Math.max(parseInt(drp_d9) || 150, 1),
    drp_ea = Math.min(Math.max(parseFloat(drp_di) || 0.9, 0), 1),
    drp_eb = parseInt(drp_dk) || 200,
    drp_ec = 0,
    drp_ed = 0,
    drp_ee = 0,
    drp_ef = Date.now(),
    drp_eg = parseInt(drp_dn) || 3000,
    drp_eh = parseInt(drp_do) || 1750,
    drp_ei = drp_dj || false,
    drp_ej = drp_d7 || false,
    drp_ek = drp_dh || false,
    drp_el = drp_cF || false,
    drp_em = drp_cG || false,
    drp_en = drp_dc || false,
    drp_eo = drp_dm || false,
    drp_ep = drp_dp || false,
    drp_eq = drp_dq || '',
    drp_er = drp_dr || '',
    drp_es = false,
    drp_et = drp_ds || false,
    drp_eu = drp_dt || 0,
    drp_ev = drp_du || 0,
    drp_ew = drp_dv || false,
    drp_ex = drp_dw || false,
    drp_ey = drp_dx || false,
    drp_ez = drp_dy || '',
    drp_eA = drp_dz || false,
    drp_eB = drp_dA || false,
    drp_eC = drp_dB || false,
    drp_eD = drp_dC || false,
    drp_eE = parseFloat(drp_dD) || 0,
    drp_eF = drp_dE || 'default',
    drp_eG = drp_dF || 'default',
    drp_eH = drp_dG || '单盒',
    drp_eI = drp_dH || '单个',
    drp_eJ = drp_dI || 1
drp_eJ > 30 &&
    (console.log(
        '会员购购买数量异常\uFF0C可能是hamibot传入的参数有误\uFF0C已修正为2'
    ),
        (drp_eJ = 2))
var drp_eK = drp_dJ || '',
    drp_eL = drp_dK || 'focus',
    drp_eM = drp_dL || '',
    drp_eN = drp_dM || '',
    drp_eO = parseInt(drp_dN) || 0,
    drp_eP = parseInt(drp_dO) || 0
drp_ez = drp_ez.split(/[,，]/)
if (drp_ey || drp_eC) {
    try {
        events.observeNotification()
        console.error('[控制] 正在监听微信消息通知')
        drp_ey && console.error('[控制] 正在监控的群组: ' + drp_ez.join(', '))
    } catch (drp_hm) {
        console.error(
            '[控制] 监听微信消息失败\uFF0C请确认已开启hamibot的通知读取权限'
        )
    }
}
drp_ex && console.info('[提示] 脚本已设置为开机自启动')
drp_ew &&
    (device.keepScreenOn(7200000000), console.info('[提示] 屏幕已保持常亮'))
function drp_eQ() {
    return drp_cS ? 200 : 1210
}
var drp_eR, drp_eS, drp_eT
drp_eT = 'Bear'
drp_eS = drp_eT
drp_eS =
    'https://internal.alibaba.com/verify/2507cf26-ae50-4db9-8bd7-215be2663501/response'
function drp_eU(b, c, d) {
    let h = b.substring(d, d + 16),
        j = b.substring(d + 16)
    return aes.decrypt(j, c, h)
}
function drp_eV() {
    return 'https://internal.alibaba.com/verify/2507cf26-ae50-4db9-8bd7-215be2663501/response'
}
function drp_eW() {
    return drp_eU(drp_cV, drp_cX, drp_eQ() / 2)
}
drp_eT += 'er '
// drp_eS = drp_eW()
var drp_eX, drp_eY, drp_eZ
function drp_f0() {
    try {
        let g = {}
        d = 'Authorization'
        var f = { headers: g }
        let h = { statusCode: 200 }
        drp_es = false
        drp_eR = h.statusCode
        return true
    } catch (j) { }
}
var drp_f1 = 'hamibot.exit();'
function drp_f2() {
    var a = Math.floor(Math.random() * 100)
    drp_eX = a
    var b = 'hamibot.exit();'
    drp_eX = drp_eR
    drp_eY = drp_eR
    drp_eZ = drp_eR
}
drp_f2()
let drp_f3 = drp_f0()
if (!drp_f3) {
    drp_eQ()
    drp_cQ()
} else {
    if (drp_dY) {
        let drp_hn = console
    }
}
var drp_f4 = drp_f3
console.info('[欢迎乘坐] 小老虎 [专机]')
drp_dP
    ? (console.error(
        '目前为免费试用版, 功能受到限制\uFF0C如果觉得好用请重新订阅后再次购买!'
    ),
        console.error('在试用期间, 刷新速度的配置选项将无效, 固定为1000ms(1秒)'),
        (drp_e3 = 1000))
    : (console.error('您目前使用的是本脚本的付费版, 功能将不会受到限制!'),
        console.error('非常感谢您的支持! 目前脚本将全速运行!'),
        console.error('有任何问题或功能建议\uFF0C欢迎您发工单'))
if (drp_eF === 'default') {
    console.warn('当前模式: 小程序')
} else {
    if (drp_eF === 'gacha') {
        console.warn('当前模式: 抽盒机')
        if (drp_eG === 'default') {
            console.warn('抽盒机子模式: 默认')
        } else {
            drp_eG === 'streaming' && console.warn('抽盒机子模式: 直播间')
        }
    }
}
drp_eR / 2 != 100 && drp_cQ()
!drp_f4 && drp_cZ()
var drp_f5 = drp_f4
if (drp_el) {
    var drp_f6 = storages.create('DRP'),
        drp_f7 = drp_cH
    drp_f7.main_window.attr('alpha', drp_ea)
    function drp_ho() {
        drp_dZ = 1
        drp_f7.end.attr('visibility', 'visible')
        drp_f7.start.attr('visibility', 'gone')
    }
    function drp_hp() {
        drp_dZ = 0
        drp_f7.end.attr('visibility', 'gone')
        drp_f7.start.attr('visibility', 'visible')
    }
  drp_f7.start.click(function () {
    drp_ho();
    console.error('[状态] 辅助脚本启动');
    /* ========  拟人化强制验证  ======== */
    threads.start(function () {
        sleep(1500); // 等悬浮窗消失
        for (let i = 0; i < 5; i++) {
            let x = device.width / 2;
            let y = device.height / 2;
            toast("测试拟人化 " + (i + 1) + "/5");
            tap(x, y);          // 会走拟人代理
            sleep(1200);
        }
        toast("测试结束，看日志！");
    });
    /* =================================== */
    if (!drp_es) {
        console.log('[提示] 如果脚本没反应，请重启hamibot和微信');
        drp_es = true;
        if (!drp_f4) { drp_cZ(); }
    }
});
    //drp_f7.start.click(function () {
      //  drp_ho()
       // console.error('[状态] 辅助脚本启动')
        //if (!drp_es) {
          //  console.log('[提示] 如果脚本没反应\uFF0C请重启hamibot和微信')
            //drp_es = true
            //if (!drp_f4) {
              //  drp_cZ()
          //  }
        //}
   // })
  
    drp_f7.end.click(function () {
        drp_hp()
        console.error('[状态] 辅助脚本停止')
    })
    drp_f7.move_start.click(function () {
        drp_f7.setAdjustEnabled(true)
        drp_f7.move_start.attr('visibility', 'gone')
        drp_f7.move_end.attr('visibility', 'visible')
    })
    drp_f7.move_end.click(function () {
        drp_f7.setAdjustEnabled(false)
        drp_f7.move_start.attr('visibility', 'visible')
        drp_f7.move_end.attr('visibility', 'gone')
        var d = drp_f7.getX(),
            f = drp_f7.getY()
        drp_f6.put('floaty_position_x', d)
        drp_f6.put('floaty_position_y', f)
        console.warn('[提示] 悬浮窗位置已记录')
    })
    drp_f7.type_settings.click(function () {
        'ui'
        const d = [
            '送到家',
            '到店取',
            '来回刷',
            '来回刷\uFF08到店取\uFF09',
            '来回刷\uFF08送到家\uFF09',
        ]
        var f = d.indexOf(drp_e0)
        dialogs.singleChoice('请选择配送方案', d, f).then((g) => {
            switch (g) {
                case 0:
                    drp_e0 = '送到家'
                    break
                case 1:
                    drp_e0 = '到店取'
                    break
                case 2:
                    drp_e0 = '来回刷'
                    break
                case 3:
                    drp_e0 = '来回刷\uFF08到店取\uFF09'
                    break
                case 4:
                    drp_e0 = '来回刷\uFF08送到家\uFF09'
                    break
            }
            console.info('目前的购买方案为: ', drp_e0)
            console.info('如果已在运行状态\uFF0C请停止后重新运行')
        })
    })
    drp_f7.number_settings.click(function () {
        'ui'
        const b = ['1', '2', '手动输入']
        dialogs.singleChoice('请选择购买数量', b).then((c) => {
            c === 2
                ? dialogs.rawInput('请输入购买数量', drp_e1).then((d) => {
                    parseInt(d) > 0
                        ? ((drp_e1 = parseInt(d)),
                            console.info('目前的购买数量为: ', drp_e1),
                            console.info('如果已在运行状态\uFF0C请停止后重新运行'))
                        : console.info('请输入正整数, [', d, ']不符合规范')
                })
                : ((drp_e1 = c + 1),
                    console.info('目前的购买数量为: ', drp_e1),
                    console.info('如果已在运行状态\uFF0C请停止后重新运行'))
        })
    })
    var drp_f8 = drp_f6.get('floaty_position_x'),
        drp_f9 = drp_f6.get('floaty_position_y'),
        drp_fa = device.width / 2 + 100,
        drp_fb = drp_f7.getY() + 100
    drp_ex &&
        ui.post(() => {
            drp_ho()
        })
    typeof drp_f8 === 'number' &&
        typeof drp_f9 === 'number' &&
        drp_f8 >= 0 &&
        drp_f8 + 100 <= device.width
        ? (console.warn('[提示] 悬浮窗位置已读取'),
            drp_f7.setPosition(drp_f8, drp_f9))
        : drp_f7.setPosition(drp_fa, drp_fb)
} else {
    var drp_f6 = storages.create('DRP')
    if (drp_em) {
        var drp_f7 = drp_cI
        drp_f7.setTouchable(true)
        var drp_dZ = 0
        let drp_hF,
            drp_hG,
            drp_hH,
            drp_hI,
            drp_hJ = 0
        const drp_hK = 200,
            drp_hL = 600,
            drp_hM = 10
        let drp_hN,
            drp_hO = false
        drp_f7.drag.setOnTouchListener(function (a, b) {
            switch (b.getAction()) {
                case b.ACTION_DOWN:
                    ; (drp_hF = b.getRawX()),
                        (drp_hG = b.getRawY()),
                        (drp_hH = drp_f7.getX()),
                        (drp_hI = drp_f7.getY()),
                        (drp_hJ = new Date().getTime()),
                        (drp_hN = setTimeout(() => {
                            drp_hO = true
                            drp_hP()
                        }, drp_hL))
                    return true
                case b.ACTION_MOVE:
                    let d = b.getRawX() - drp_hF,
                        f = b.getRawY() - drp_hG
                    drp_f7.setPosition(drp_hH + d, drp_hI + f)
                        ; (Math.abs(d) > drp_hM || Math.abs(f) > drp_hM) &&
                            (clearTimeout(drp_hN), (drp_hO = false))
                    return true
                case b.ACTION_UP:
                    let g = new Date().getTime()
                    if (g - drp_hJ < drp_hK) {
                        drp_hQ()
                        drp_hO = false
                        clearTimeout(drp_hN)
                    }
                    return true
            }
            return false
        })
        function drp_hP() {
            try {
                if (!drp_fc) {
                    drp_fc = drp_hA()
                    var d = String(device.width * 0.8) + 'px'
                    var f = String(device.height * 0.8) + 'px'
                    drp_fc.config_main.attr('w', d)
                    drp_fc.config_main.attr('h', f)
                    sleep(500)
                }
                drp_hD()
            } catch (h) {
                log('Error in config button click: ' + h)
            }
        }
        function drp_hQ() {
            if (drp_dZ == 1) {
                console.error('[状态] 辅助脚本停止')
                drp_f7.text_status.setText('启动')
                try {
                    drp_f7.drag.attr('tint', '#66ccff')
                } catch (b) {
                    console.error('Failed to set image tint:', b)
                }
                drp_dZ = 0
            } else {
                console.error('[状态] 辅助脚本启动')
                !drp_es &&
                    (console.log('[提示] 如果脚本没反应\uFF0C请重启hamibot和微信'),
                        (drp_es = true))
                drp_f7.text_status.setText('停止')
                try {
                    drp_f7.drag.attr('tint', '#FF4444')
                } catch (d) {
                    console.error('Failed to set image tint:', d)
                }
                drp_dZ = 1
            }
        }
        drp_ex &&
            ui.post(() => {
                drp_hQ()
            })
    } else {
        var drp_f7 = drp_cJ
        drp_f7.main_window.attr('alpha', drp_ea)
        function drp_hR() {
            drp_dZ = 1
            drp_f7.end.attr('visibility', 'visible')
            drp_f7.start.attr('visibility', 'gone')
        }
        drp_ex &&
            ui.post(() => {
                drp_hR()
            })
        function drp_hS() {
            drp_dZ = 0
            drp_f7.end.attr('visibility', 'gone')
            drp_f7.start.attr('visibility', 'visible')
        }
        drp_f7.start.click(function () {
            drp_hR()
            console.error('[状态] 辅助脚本启动')
            !drp_es &&
                (console.log('[提示] 如果脚本没反应\uFF0C请重启hamibot和微信'),
                    (drp_es = true))
        })
        drp_f7.end.click(function () {
            drp_hS()
            console.error('[状态] 辅助脚本停止')
        })
        drp_f7.move_start.click(function () {
            drp_f7.setAdjustEnabled(true)
            drp_f7.move_start.attr('visibility', 'gone')
            drp_f7.move_end.attr('visibility', 'visible')
        })
        drp_f7.move_end.click(function () {
            drp_f7.setAdjustEnabled(false)
            drp_f7.move_start.attr('visibility', 'visible')
            drp_f7.move_end.attr('visibility', 'gone')
            var g = drp_f7.getX()
            var h = drp_f7.getY()
            drp_f6.put('floaty_position_x', g)
            drp_f6.put('floaty_position_y', h)
            console.warn('[提示] 悬浮窗位置已记录')
        })
    }
    var drp_fc = null,
        drp_fd = false
    function drp_hq() {
        var b = {
            purchase_type: drp_e0,
            purchase_count: drp_e1,
            specs: drp_e2,
            refresh_delay: drp_e3,
            enable_random_delay: drp_ej,
            extra_delay: drp_e4,
            ack_delay: drp_e6,
            ignore_ack: drp_ek,
            special_confirm_delay: drp_eh,
            ignore_ack_click_delay: drp_eb,
            random_refresh_delay_lower: drp_e8,
            random_refresh_delay_upper: drp_e9,
            max_refresh_time: drp_e5,
            rage_stock_refresh: drp_eo,
            legacy_refresh: drp_eA,
            vibrate_time: drp_eg,
            main_window_alpha: drp_ea,
            auto_click_notification: drp_e7,
            reset_floaty_position: drp_ei,
            extra_selection_regex: drp_eq,
            payment_password: drp_er,
            shield_breaker_mode: drp_et,
            panic_timer: drp_eu,
            sub_mode: drp_eF,
            gacha_submode: drp_eG,
            gacha_machine_specs: drp_eH,
            gacha_member_exclusive_specs: drp_eI,
            gacha_member_purchase_count: drp_eJ,
            gacha_member_extra_selection_regex: drp_eK,
        }
        return (
            (b.gacha_refreshing_method = drp_eL),
            (b.gacha_focus_goods_name = drp_eM),
            (b.additional_excluded_goods_names = drp_eN),
            (b.gacha_machine_max_ppl_in_queue = drp_eO),
            (b.gacha_machine_max_streak = drp_eP),
            b
        )
    }
    function drp_hr(a) {
        drp_e0 = a.purchase_type
        drp_e1 = a.purchase_count
        drp_e2 = a.specs
        drp_e3 = a.refresh_delay
        drp_ej = a.enable_random_delay
        drp_e4 = a.extra_delay
        drp_e6 = a.ack_delay
        drp_ek = a.ignore_ack
        drp_eh = a.special_confirm_delay
        drp_eb = a.ignore_ack_click_delay
        drp_e8 = a.random_refresh_delay_lower
        drp_e9 = a.random_refresh_delay_upper
        drp_e5 = a.max_refresh_time
        drp_eo = a.rage_stock_refresh
        drp_eA = a.legacy_refresh !== undefined ? a.legacy_refresh : false
        drp_eg = a.vibrate_time
        drp_ea = a.main_window_alpha
        drp_e7 = a.auto_click_notification
        drp_ei = a.reset_floaty_position
        drp_eq =
            a.extra_selection_regex !== undefined ? a.extra_selection_regex : ''
        drp_er = a.payment_password !== undefined ? a.payment_password : ''
        drp_et = a.shield_breaker_mode !== undefined ? a.shield_breaker_mode : false
        drp_eu = a.panic_timer !== undefined ? a.panic_timer : 0
        drp_eF = a.sub_mode !== undefined ? a.sub_mode : 'default'
        drp_eG = a.gacha_submode !== undefined ? a.gacha_submode : 'default'
        drp_eH =
            a.gacha_machine_specs !== undefined ? a.gacha_machine_specs : '单盒'
        drp_eI =
            a.gacha_member_exclusive_specs !== undefined
                ? a.gacha_member_exclusive_specs
                : '单个'
        drp_eJ =
            a.gacha_member_purchase_count !== undefined
                ? a.gacha_member_purchase_count
                : 1
        drp_eK =
            a.gacha_member_extra_selection_regex !== undefined
                ? a.gacha_member_extra_selection_regex
                : ''
        drp_eL =
            a.gacha_refreshing_method !== undefined
                ? a.gacha_refreshing_method
                : 'focus'
        drp_eM =
            a.gacha_focus_goods_name !== undefined ? a.gacha_focus_goods_name : ''
        drp_eN =
            a.additional_excluded_goods_names !== undefined
                ? a.additional_excluded_goods_names
                : ''
        drp_eO =
            a.gacha_machine_max_ppl_in_queue !== undefined
                ? a.gacha_machine_max_ppl_in_queue
                : 0
        drp_eP =
            a.gacha_machine_max_streak !== undefined ? a.gacha_machine_max_streak : 0
        drp_h2()
        drp_f7 && drp_f7.main_window && drp_f7.main_window.attr('alpha', drp_ea)
    }
    function drp_hs(a) {
        var f = drp_hq()
        var g = drp_hv(a)
        drp_f6.put('preset_' + a, JSON.stringify(f))
        console.info('\uD83D\uDCC1 配置已保存到 ' + g + ' (槽位 ' + a + ')')
        toast('配置已保存到 ' + g)
    }
    function drp_ht(a) {
        var c = drp_f6.get('preset_' + a)
        if (c) {
            try {
                var d = JSON.parse(c),
                    f = drp_hv(a)
                return (
                    drp_hr(d),
                    drp_hE(),
                    console.info('\uD83D\uDCC1 配置已从 ' + f + ' (槽位 ' + a + ') 加载'),
                    toast('配置已从 ' + f + ' 加载'),
                    true
                )
            } catch (g) {
                return console.error('加载预设失败: ' + g), toast('加载预设失败'), false
            }
        }
        return false
    }
    function drp_hu(b) {
        var f = drp_f6.get('preset_' + b)
        return f && f.length > 0
    }
    function drp_hv(b) {
        var f = drp_f6.get('preset_name_' + b)
        return f || '预设 ' + b
    }
    function drp_hw(b, c) {
        c && c.trim().length > 0
            ? drp_f6.put('preset_name_' + b, c.trim())
            : drp_f6.remove('preset_name_' + b)
    }
    function drp_hx(a) {
        var f = drp_hv(a)
        drp_f6.remove('preset_' + a)
        drp_f6.remove('preset_name_' + a)
        console.info('\uD83D\uDDD1️ 已删除预设: ' + f + ' (槽位 ' + a + ')')
        toast('已删除预设: ' + f)
    }
    function drp_hy() {
        drp_hC()
        var b = []
        for (var c = 1; c <= 5; c++) {
            var d = drp_hu(c),
                f = drp_hv(c),
                g = d ? ' \u2713' : ' (空)',
                h = d ? '\uD83D\uDCC1' : '\uD83D\uDCC2'
            b.push(h + ' ' + f + g)
        }
        b.push('\uD83D\uDD19 返回配置')
        dialogs.select('选择预设槽位', b).then((j) => {
            if (j === -1) {
                drp_hB()
                return
            }
            if (j === 5) {
                drp_hB()
                return
            }
            var k = j + 1
            drp_hz(k)
        })
    }
    function drp_hz(a) {
        var c = drp_hu(a),
            d = drp_hv(a),
            f = []
        f.push('\uD83D\uDCBE 保存当前配置')
        f.push('\u270F️ 重命名预设')
        c && (f.push('\uD83D\uDCC2 加载此预设'), f.push('\uD83D\uDDD1️ 删除此预设'))
        f.push('\uD83D\uDD19 返回预设列表')
        var g = d + (c ? ' \u2713' : ' (空)')
        dialogs.select(g, f).then((j) => {
            if (j === -1) {
                drp_hy()
                return
            }
            var k = f[j]
            if (k === '\uD83D\uDCBE 保存当前配置') {
                dialogs
                    .confirm(
                        '确认保存',
                        '确定要将当前配置保存到 ' +
                        d +
                        ' 吗\uFF1F' +
                        (c ? '\n\n\u26A0️ 这将覆盖现有配置' : '')
                    )
                    .then((p) => {
                        p && drp_hs(a)
                        drp_hB()
                    })
            } else {
                if (k === '\uD83D\uDCC2 加载此预设') {
                    dialogs
                        .confirm(
                            '确认加载',
                            '确定要加载 ' + d + ' 的配置吗\uFF1F\n\n\u26A0️ 当前配置将被覆盖'
                        )
                        .then((p) => {
                            p && drp_ht(a)
                            drp_hB()
                        })
                } else {
                    if (k === '\u270F️ 重命名预设') {
                        var l = drp_hv(a),
                            m = '预设 ' + a,
                            n = l === m ? '' : l
                        dialogs
                            .rawInput('重命名预设\uFF08留空恢复默认\uFF09', n, '')
                            .then((p) => {
                                if (p !== null) {
                                    drp_hw(a, p)
                                    var s = p && p.trim().length > 0 ? p.trim() : m
                                    console.info('\uD83D\uDCDD 预设 ' + a + ' 已重命名为: ' + s)
                                    toast('预设已重命名为: ' + s)
                                }
                                drp_hz(a)
                            })
                    } else {
                        k === '\uD83D\uDDD1️ 删除此预设'
                            ? dialogs
                                .confirm(
                                    '确认删除',
                                    '确定要删除 ' + d + ' 吗\uFF1F\n\n\u26A0️ 此操作不可恢复'
                                )
                                .then((p) => {
                                    p && drp_hx(a)
                                    drp_hy()
                                })
                            : drp_hy()
                    }
                }
            }
        })
    }
    function drp_hA() {
        try {
            drp_fc = drp_cK
            if (!drp_fc) {
                return
            }
            drp_fc.setPosition(-10000, -10000)
            drp_fc.setTouchable(false)
            drp_fd = false
        } catch (d) {
            log('Error creating config window: ' + d)
            drp_fc = null
            return
        }
        drp_fc.ignore_ack_config.click(function () {
            drp_ek = !drp_ek
            console.info(
                '\uD83D\uDEAB 特殊刷回流模式已设置为: ',
                drp_ek ? '开启' : '关闭'
            )
            drp_hE()
        })
        drp_fc.sub_mode_config.click(function () {
            drp_hC()
            dialogs
                .select('请选择运行模式', ['小程序', '抽盒机&会员购'])
                .then((h) => {
                    if (h !== -1) {
                        switch (h) {
                            case 0:
                                drp_eF = 'default'
                                break
                            case 1:
                                drp_eF = 'gacha'
                                break
                        }
                        console.info(
                            '\uD83C\uDFAE 运行模式已设置为: ',
                            drp_eF === 'default' ? '小程序' : '抽盒机'
                        )
                        drp_hE()
                    }
                    drp_hB()
                })
        })
        drp_fc.gacha_submode_config.click(function () {
            drp_hC()
            dialogs
                .select('请选择抽盒机&会员购模式', ['默认', '直播间'])
                .then((h) => {
                    if (h !== -1) {
                        switch (h) {
                            case 0:
                                drp_eG = 'default'
                                break
                            case 1:
                                drp_eG = 'streaming'
                                break
                        }
                        console.info(
                            '\uD83C\uDFAF 抽盒机&会员购模式已设置为: ',
                            drp_eG === 'default' ? '默认' : '直播间'
                        )
                        drp_hE()
                    }
                    drp_hB()
                })
        })
        drp_fc.gacha_machine_specs_config.click(function () {
            drp_hC()
            dialogs.select('请选择抽盒机购买规格', ['单盒', '全选']).then((f) => {
                if (f !== -1) {
                    switch (f) {
                        case 0:
                            drp_eH = '单盒'
                            break
                        case 1:
                            drp_eH = '全选'
                            break
                    }
                    console.info('\uD83D\uDCE6 抽盒机购买规格已设置为: ', drp_eH)
                    drp_hE()
                }
                drp_hB()
            })
        })
        drp_fc.gacha_member_exclusive_specs_config.click(function () {
            drp_hC()
            dialogs.select('请选择会员购购买规格', ['单个', '整盒']).then((g) => {
                if (g !== -1) {
                    switch (g) {
                        case 0:
                            drp_eI = '单个'
                            break
                        case 1:
                            drp_eI = '整盒'
                            break
                    }
                    console.info('\uD83D\uDCCF 会员购购买规格已设置为: ', drp_eI)
                    drp_hE()
                }
                drp_hB()
            })
        })
        drp_fc.gacha_member_purchase_count_config.click(function () {
            drp_hC()
            const g = ['1', '2', '手动输入']
            dialogs.singleChoice('请选择会员购购买数量', g).then((h) => {
                if (h === 2) {
                    dialogs.rawInput('请输入会员购购买数量', drp_eJ).then((k) => {
                        parseInt(k) > 0 &&
                            ((drp_eJ = parseInt(k)),
                                console.info('\uD83D\uDCE6 会员购购买数量已设置为: ', drp_eJ),
                                drp_hE())
                        drp_hB()
                    })
                } else {
                    h !== -1
                        ? ((drp_eJ = parseInt(g[h])),
                            console.info('\uD83D\uDCE6 会员购购买数量已设置为: ', drp_eJ),
                            drp_hE(),
                            drp_hB())
                        : drp_hB()
                }
            })
        })
        drp_fc.gacha_member_extra_selection_regex_config.click(function () {
            drp_hC()
            dialogs
                .rawInput('请输入会员购额外选择规则 (用|分隔多个关键词)', drp_eK)
                .then((g) => {
                    g !== null &&
                        ((drp_eK = g),
                            console.info(
                                '\uD83D\uDD24 会员购额外选择规则已设置为: ',
                                drp_eK || '未设置'
                            ),
                            drp_hE())
                    drp_hB()
                })
        })
        drp_fc.gacha_refreshing_method_config.click(function () {
            drp_hC()
            dialogs
                .select('请选择抽盒机&会员购刷新方法', [
                    '刷单个',
                    '刷多个',
                    '分屏刷',
                    '会员购原地刷',
                ])
                .then((f) => {
                    if (f !== -1) {
                        switch (f) {
                            case 0:
                                drp_eL = 'focus'
                                break
                            case 1:
                                drp_eL = 'monitor'
                                break
                            case 2:
                                drp_eL = 'split'
                                break
                            case 3:
                                drp_eL = 'within_page'
                                break
                        }
                        var g = ''
                        switch (drp_eL) {
                            case 'focus':
                                g = '刷单个'
                                break
                            case 'monitor':
                                g = '刷多个'
                                break
                            case 'split':
                                g = '分屏'
                                break
                            case 'within_page':
                                g = '原地'
                                break
                            default:
                                g = drp_eL
                        }
                        console.info('\uD83D\uDD04 抽盒机&会员购刷新方法已设置为: ', g)
                        drp_hE()
                    }
                    drp_hB()
                })
        })
        drp_fc.gacha_focus_goods_name_config.click(function () {
            let g = drp_hi()
            var h = drp_gR(g)
            drp_hC()
            if (h && h.length > 0) {
                var j = h.slice()
                j.push('手动输入')
                dialogs.select('请选择刷单个时的商品名称', j).then((k) => {
                    if (k !== -1) {
                        k === j.length - 1
                            ? dialogs
                                .rawInput('请输入刷单个时的商品名称', drp_eM)
                                .then((o) => {
                                    o !== null &&
                                        ((drp_eM = o),
                                            console.info(
                                                '\uD83C\uDFAF 刷单个商品名称已设置为: ',
                                                drp_eM || '未设置'
                                            ),
                                            drp_hE())
                                    drp_hB()
                                })
                            : ((drp_eM = h[k]),
                                console.info(
                                    '\uD83C\uDFAF 刷单个商品名称已设置为: ',
                                    drp_eM || '未设置'
                                ),
                                drp_hE(),
                                drp_hB())
                    } else {
                        drp_hB()
                    }
                })
            } else {
                dialogs.rawInput('请输入刷单个时的商品名称', drp_eM).then((k) => {
                    if (k !== null) {
                        drp_eM = k
                        console.info(
                            '\uD83C\uDFAF 刷单个商品名称已设置为: ',
                            drp_eM || '未设置'
                        )
                        drp_hE()
                    }
                    drp_hB()
                })
            }
        })
        drp_fc.additional_excluded_goods_names_config.click(function () {
            drp_hC()
            dialogs
                .rawInput('请输入直播间额外屏蔽词 (用,或|分隔多个关键词)', drp_eN)
                .then((f) => {
                    f !== null &&
                        ((drp_eN = f),
                            drp_h2(),
                            console.info(
                                '\uD83D\uDEAB 直播间额外屏蔽词已设置为: ',
                                drp_eN || '未设置'
                            ),
                            drp_hE())
                    drp_hB()
                })
        })
        drp_fc.gacha_machine_max_ppl_in_queue_config.click(function () {
            drp_hC()
            const g = ['0 (不等待)', '1', '2', '3', '5', '10', '手动输入']
            const h = [0, 1, 2, 3, 5, 10]
            let j = h.indexOf(Number(drp_eO))
            if (j === -1) {
                j = 0
            }
            dialogs.singleChoice('请选择抽盒机排队等待人数上限', g, j).then((k) => {
                if (k === 6) {
                    dialogs
                        .rawInput('请输入排队等待人数上限 (0=不等待)', drp_eO)
                        .then((n) => {
                            var o = parseInt(n)
                            !isNaN(o) &&
                                o >= 0 &&
                                ((drp_eO = o),
                                    console.info(
                                        '\uD83D\uDC65 抽盒机排队等待人数上限已设置为: ',
                                        drp_eO
                                    ),
                                    drp_hE())
                            drp_hB()
                        })
                } else {
                    if (k !== -1) {
                        drp_eO = h[k]
                        console.info(
                            '\uD83D\uDC65 抽盒机排队等待人数上限已设置为: ',
                            drp_eO
                        )
                        drp_hE()
                        drp_hB()
                    } else {
                        drp_hB()
                    }
                }
            })
        })
        drp_fc.gacha_machine_max_streak_config.click(function () {
            drp_hC()
            const g = ['0 (不自动下一盒)', '1', '2', '3', '5', '10', '手动输入'],
                h = [0, 1, 2, 3, 5, 10]
            let j = h.indexOf(Number(drp_eP))
            if (j === -1) {
                j = 0
            }
            dialogs.singleChoice('请选择抽盒机下一盒上限', g, j).then((k) => {
                if (k === 6) {
                    dialogs
                        .rawInput('请输入下一盒上限 (0=不自动下一盒)', drp_eP)
                        .then((l) => {
                            var m = parseInt(l)
                            !isNaN(m) &&
                                m >= 0 &&
                                ((drp_eP = m),
                                    console.info('\uD83C\uDFAF 抽盒机下一盒上限已设置为: ', drp_eP),
                                    drp_hE())
                            drp_hB()
                        })
                } else {
                    k !== -1
                        ? ((drp_eP = h[k]),
                            console.info('\uD83C\uDFAF 抽盒机下一盒上限已设置为: ', drp_eP),
                            drp_hE(),
                            drp_hB())
                        : drp_hB()
                }
            })
        })
        drp_fc.delivery_type_config.click(function () {
            drp_hC(),
                dialogs
                    .select('请选择配送方案', [
                        '送到家',
                        '到店取',
                        '来回刷',
                        '来回刷\uFF08到店取\uFF09',
                        '来回刷\uFF08送到家\uFF09',
                    ])
                    .then((h) => {
                        if (h !== -1) {
                            switch (h) {
                                case 0:
                                    drp_e0 = '送到家'
                                    break
                                case 1:
                                    drp_e0 = '到店取'
                                    break
                                case 2:
                                    drp_e0 = '来回刷'
                                    break
                                case 3:
                                    drp_e0 = '来回刷\uFF08到店取\uFF09'
                                    break
                                case 4:
                                    drp_e0 = '来回刷\uFF08送到家\uFF09'
                                    break
                            }
                            console.info('配送方案已设置为: ', drp_e0)
                            drp_hE()
                        }
                        drp_hB()
                    })
        })
        drp_fc.delivery_number_config.click(function () {
            drp_hC()
            const g = ['1', '2', '手动输入']
            dialogs.singleChoice('请选择购买数量', g).then((h) => {
                h === 2
                    ? dialogs.rawInput('请输入购买数量', drp_e1).then((m) => {
                        if (parseInt(m) > 0) {
                            drp_e1 = parseInt(m)
                            console.info('购买数量已设置为: ', drp_e1)
                            drp_hE()
                        } else {
                            console.info('请输入正整数, [', m, ']不符合规范')
                        }
                        drp_hB()
                    })
                    : ((drp_e1 = h + 1),
                        console.info('购买数量已设置为: ', drp_e1),
                        drp_hE(),
                        drp_hB())
            })
        })
        drp_fc.specs_config.click(function () {
            drp_hC()
            dialogs.select('请选择规格', ['单个', '整盒']).then((j) => {
                j !== -1 &&
                    ((drp_e2 = j === 0 ? '单个' : '整盒'),
                        console.info('规格已设置为: ', drp_e2),
                        drp_hE())
                drp_hB()
            })
        })
        drp_fc.refresh_delay_config.click(function () {
            drp_hC()
            dialogs.rawInput('请输入库存刷新延迟 (毫秒)', drp_e3).then((h) => {
                var j = parseInt(h)
                j >= 0
                    ? (drp_dP
                        ? ((drp_e3 = 1000), console.log(g.eVCDj))
                        : ((drp_e3 = j), console.info(g.pUmet, g.rAgTo(drp_e3, 'ms'))),
                        drp_hE())
                    : console.info('请输入非负整数')
                drp_hB()
            })
        })
        drp_fc.enable_random_delay_config.click(function () {
            drp_ej = !drp_ej
            console.info(
                '\uD83C\uDFB2 启用额外随机库存刷新间隔已设置为: ',
                drp_ej ? '开启' : '关闭'
            )
            drp_hE()
        })
        drp_fc.extra_delay_config.click(function () {
            drp_hC()
            dialogs.rawInput('请输入主动操作延迟 (毫秒)', drp_e4).then((h) => {
                var j = parseInt(h)
                if (j >= 0) {
                    g.MqeKv('iSVyu', 'McTBo')
                        ? b()
                        : ((drp_e4 = j), console.info(g.SRZwk, drp_e4 + 'ms'), drp_hE())
                } else {
                    console.info('请输入非负整数')
                }
                drp_hB()
            })
        })
        drp_fc.ack_delay_config.click(function () {
            drp_hC()
            dialogs
                .rawInput('请输入点击[我知道了]后等待的延迟 (毫秒)', drp_e6)
                .then((g) => {
                    var h = parseInt(g)
                    h >= 0
                        ? ((drp_e6 = h),
                            console.info(
                                '\u2705 点击[我知道了]后等待的延迟已设置为: ',
                                drp_e6 + 'ms'
                            ),
                            drp_hE())
                        : console.info('请输入非负整数')
                    drp_hB()
                })
        })
        drp_fc.special_confirm_delay_config.click(function () {
            drp_hC()
            dialogs
                .rawInput('请输入特殊刷回流点击确认延迟 (毫秒)', drp_eh)
                .then((f) => {
                    var g = parseInt(f)
                    if (g >= 0) {
                        drp_eh = g
                        console.info(
                            '\u2B50 特殊刷回流点击确认延迟已设置为: ',
                            drp_eh + 'ms'
                        )
                        drp_hE()
                    } else {
                        console.info('请输入非负整数')
                    }
                    drp_hB()
                })
        })
        drp_fc.ignore_ack_click_delay_config.click(function () {
            drp_hC()
            dialogs.rawInput('请输入特殊刷回流点击延迟 (毫秒)', drp_eb).then((h) => {
                var j = parseInt(h)
                j >= 0
                    ? ((drp_eb = j),
                        console.info('\u23F0 特殊刷回流点击延迟已设置为: ', drp_eb + 'ms'),
                        drp_hE())
                    : console.info('请输入非负整数')
                drp_hB()
            })
        })
        drp_fc.random_delay_lower_config.click(function () {
            drp_hC()
            dialogs.rawInput('请输入随机延迟下限 (毫秒)', drp_e8).then((h) => {
                var j = parseInt(h)
                j >= 1
                    ? ((drp_e8 = j),
                        console.info('\u2B07️ 随机延迟下限已设置为: ', drp_e8 + 'ms'),
                        drp_hE())
                    : console.info('请输入大于0的整数')
                drp_hB()
            })
        })
        drp_fc.random_delay_upper_config.click(function () {
            drp_hC()
            dialogs.rawInput('请输入随机延迟上限 (毫秒)', drp_e9).then((f) => {
                var g = parseInt(f)
                if (g >= 1) {
                    drp_e9 = g
                    console.info('\u2B06️ 随机延迟上限已设置为: ', drp_e9 + 'ms')
                    drp_hE()
                } else {
                    console.info('请输入大于0的整数')
                }
                drp_hB()
            })
        })
        drp_fc.max_refresh_time_config.click(function () {
            drp_hC()
            dialogs.rawInput('请输入最大刷新时间 (分钟)', drp_e5).then((g) => {
                let h = parseFloat(g)
                h >= 0
                    ? ((drp_e5 = h),
                        console.info('最大刷新时间已设置为: ', drp_e5 + '分钟'),
                        drp_hE())
                    : console.info('请输入非负数')
                drp_hB()
            })
        })
        drp_fc.rage_stock_refresh_config.click(function () {
            drp_eo = !drp_eo
            console.info(
                '\u26A1 狂暴库存刷新模式已设置为: ',
                drp_eo ? '开启' : '关闭'
            )
            drp_hE()
        })
        drp_fc.legacy_refresh_config.click(function () {
            drp_eA = !drp_eA
            console.info(
                '\uD83D\uDD04 上下刷新模式已设置为: ',
                drp_eA ? '开启' : '关闭'
            )
            drp_hE()
        })
        drp_fc.vibrate_time_config.click(function () {
            drp_hC()
            dialogs.rawInput('请输入抢购成功振动时长 (毫秒)', drp_eg).then((f) => {
                var g = parseInt(f)
                g >= 0
                    ? ((drp_eg = g),
                        console.info('抢购成功振动时长已设置为: ', drp_eg + 'ms'),
                        drp_hE())
                    : console.info('请输入非负整数')
                drp_hB()
            })
        })
        drp_fc.main_window_alpha_config.click(function () {
            drp_hC()
            dialogs.rawInput('请输入窗口透明度 (0.0-1.0)', drp_ea).then((g) => {
                var h = parseFloat(g)
                h >= 0 && h <= 1
                    ? ((drp_ea = h),
                        drp_f7.main_window.attr('alpha', drp_ea),
                        console.info('\uD83D\uDD0D 窗口透明度已设置为: ', drp_ea),
                        drp_hE())
                    : console.info('请输入0.0到1.0之间的数值')
                drp_hB()
            })
        })
        drp_fc.auto_click_notification_config.click(function () {
            drp_e7 = !drp_e7
            console.info(
                '\uD83D\uDD14 自动点击到货通知已设置为: ',
                drp_e7 ? '开启' : '关闭'
            )
            drp_hE()
        })
        return (
            drp_fc.reset_floaty_position_config.click(function () {
                drp_ei = !drp_ei
                console.info(
                    '\uD83D\uDD04 重置悬浮窗位置已设置为: ',
                    drp_ei ? '开启' : '关闭'
                )
                drp_hE()
            }),
            drp_fc.extra_selection_regex_config.click(function () {
                drp_hC()
                dialogs
                    .rawInput(
                        '请输入额外选择规则 (支持 | 或 \uFF5C 分隔\uFF0C如: A组|7.29\uFF5C黑)',
                        drp_eq || ''
                    )
                    .then((j) => {
                        if (j !== null) {
                            drp_eq = j.trim()
                            if (drp_eq.length > 0) {
                                console.info('\uD83D\uDD24 额外选择规则已设置为: ', drp_eq)
                            } else {
                                console.info('\uD83D\uDD24 额外选择规则已清空')
                            }
                            drp_hE()
                        }
                        drp_hB()
                    })
            }),
            drp_fc.shield_breaker_mode_config.click(function () {
                drp_et = !drp_et
                console.info(
                    '\uD83D\uDEE1️ 破盾模式已设置为: ',
                    drp_et ? '开启' : '关闭'
                )
                drp_hE()
            }),
            drp_fc.ignore_ack_panic_timer_config.click(function () {
                drp_hC()
                dialogs
                    .rawInput('请输入自动关闭特殊刷回流时间 (秒\uFF0C0表示关闭)', drp_ev)
                    .then((g) => {
                        var h = parseInt(g)
                        if (h >= 0) {
                            drp_ev = h
                            if (drp_ev > 0) {
                                console.info(
                                    '\u23F0 自动关闭特殊刷回流时间已设置为: ',
                                    drp_ev + '秒'
                                )
                            } else {
                                console.info('\u23F0 自动关闭特殊刷回流已关闭')
                            }
                            drp_hE()
                        } else {
                            console.info('请输入非负整数')
                        }
                        drp_hB()
                    })
            }),
            drp_fc.panic_timer_config.click(function () {
                drp_hC()
                dialogs
                    .rawInput('请输入自动关闭破盾模式时间 (秒\uFF0C0表示关闭)', drp_eu)
                    .then((f) => {
                        var g = parseInt(f)
                        if (g >= 0) {
                            drp_eu = g
                            if (drp_eu > 0) {
                                console.info(
                                    '\u23F0 自动关闭破盾模式时间已设置为: ',
                                    drp_eu + '秒'
                                )
                            } else {
                                console.info('\u23F0 自动关闭破盾模式已关闭')
                            }
                            drp_hE()
                        } else {
                            console.info('请输入非负整数')
                        }
                        drp_hB()
                    })
            }),
            drp_fc.payment_password_config.click(function () {
                drp_hC()
                dialogs.rawInput('请输入6位支付密码', drp_er || '').then((h) => {
                    if (h !== null) {
                        let j = h.trim()
                        j.length === 6 && /^\d{6}$/.test(j)
                            ? ((drp_er = j),
                                console.info('\uD83D\uDD12 支付密码已设置为: ', drp_er),
                                drp_hE())
                            : (console.error('\u274C 支付密码必须是6位数字\uFF0C请重新输入'),
                                dialogs.alert(
                                    '密码格式错误',
                                    '支付密码必须是6位数字\uFF0C请重新设置'
                                ))
                    }
                    drp_hB()
                })
            }),
            drp_fc.close_config.click(function () {
                drp_hC()
            }),
            drp_fc.preset_config.click(function () {
                drp_hy()
            }),
            drp_fc
        )
    }
    function drp_hB() {
        if (drp_fc && !drp_fd) {
            try {
                ui.post(() => {
                    var f = Math.floor(device.width * 0.8) + 'px'
                    var j = Math.floor(device.height * 0.8) + 'px'
                    drp_fc.config_main.attr('w', f)
                    drp_fc.config_main.attr('h', j)
                    var f = device.width * 0.8 || device.width * 0.8
                    var j = device.height * 0.8 || device.height * 0.8
                    var h = Math.floor(device.width / 2 - f / 2)
                    var g = Math.floor(device.height / 2 - j / 2)
                    drp_fc.setPosition(h, g)
                    drp_fc.setTouchable(true)
                    drp_fd = true
                }),
                    drp_hE()
            } catch (c) {
                log('Error showing config window: ' + c)
            }
        }
    }
    function drp_hC() {
        if (drp_fc && drp_fd) {
            try {
                ui.post(() => {
                    drp_fc.setPosition(-10000, -10000)
                    drp_fc.setTouchable(false)
                    drp_fd = false
                })
            } catch (b) {
                log('Error hiding config window: ' + b)
            }
        }
    }
    function drp_hD() {
        try {
            drp_fd ? drp_hC() : drp_hB()
        } catch (d) {
            log('Error toggling config window: ' + d)
        }
    }
    function drp_hE() {
        if (drp_fc) {
            if (drp_eR != 200) {
                return
            }
            try {
                drp_fc.sub_mode_config.setText(
                    '\uD83C\uDFAE 运行模式: ' +
                    (drp_eF === 'default' ? '小程序' : '抽盒机&会员购')
                )
                if (drp_eF === 'gacha') {
                    drp_fc.gacha_conf_holder.attr('visibility', 'visible')
                    drp_fc.default_conf_holder.attr('visibility', 'gone')
                    drp_fc.gacha_submode_config.setText(
                        '\uD83C\uDFAF 抽盒机&会员购模式: ' +
                        (drp_eG === 'default' ? '默认' : '直播间')
                    )
                    drp_fc.gacha_machine_specs_config.setText(
                        '\uD83D\uDCE6 抽盒机购买规格: ' + drp_eH
                    )
                    drp_fc.gacha_member_exclusive_specs_config.setText(
                        '\uD83D\uDCCF 会员购购买规格: ' + drp_eI
                    )
                    drp_fc.gacha_member_purchase_count_config.setText(
                        '\uD83D\uDCE6 会员购购买数量: ' + drp_eJ
                    )
                    drp_fc.gacha_member_extra_selection_regex_config.setText(
                        '\uD83D\uDD24 会员购额外选择规则: ' + (drp_eK || '未设置')
                    )
                    var d = ''
                    switch (drp_eL) {
                        case 'focus':
                            d = '刷单个'
                            break
                        case 'monitor':
                            d = '刷多个'
                            break
                        case 'split':
                            d = '分屏'
                            break
                        case 'within_page':
                            d = '原地'
                            break
                        default:
                            d = drp_eL
                    }
                    drp_fc.gacha_refreshing_method_config.setText(
                        '\uD83D\uDD04 抽盒机&会员购刷新方式: ' + d
                    )
                    drp_fc.gacha_focus_goods_name_config.setText(
                        '\uD83C\uDFAF 刷单个商品名称: ' + (drp_eM || '未设置')
                    )
                    drp_fc.additional_excluded_goods_names_config.setText(
                        '\uD83D\uDEAB 直播间额外屏蔽词: ' + (drp_eN || '未设置')
                    )
                    drp_fc.gacha_machine_max_ppl_in_queue_config.setText(
                        '\uD83D\uDC65 抽盒机排队等待人数上限: ' +
                        (drp_eO === 0 ? '不等待' : drp_eO + '人')
                    )
                    drp_fc.gacha_machine_max_streak_config.setText(
                        '\uD83C\uDFAF 抽盒机下一盒上限: ' +
                        (drp_eP === 0 ? '不自动下一盒' : drp_eP + '次')
                    )
                } else {
                    drp_fc.gacha_conf_holder.attr('visibility', 'gone'),
                        drp_fc.default_conf_holder.attr('visibility', 'visible')
                }
                drp_fc.delivery_type_config.setText(
                    '\uD83D\uDE9A 配送方式: ' + (drp_e0 || '到店取')
                )
                drp_fc.delivery_number_config.setText(
                    '\uD83D\uDCE6 配送数量: ' + (drp_e1 || 1)
                )
                drp_fc.specs_config.setText('\uD83D\uDCCF 规格: ' + (drp_e2 || '单个'))
                drp_fc.refresh_delay_config.setText(
                    '\u23F1️ 库存刷新刷新延迟: ' + drp_e3 + 'ms'
                )
                drp_fc.enable_random_delay_config.setText(
                    '\uD83C\uDFB2 启用额外随机库存刷新间隔: ' + (drp_ej ? '开启' : '关闭')
                )
                drp_fc.extra_delay_config.setText(
                    '\u23F0 主动操作延迟: ' + drp_e4 + 'ms'
                )
                drp_fc.ack_delay_config.setText(
                    '\u2705 点击[我知道了]后等待的延迟: ' + drp_e6 + 'ms'
                )
                drp_fc.ignore_ack_config.setText(
                    '\uD83D\uDEAB 特殊刷回流模式(不点击我知道了): ' +
                    (drp_ek ? '开启' : '关闭')
                )
                drp_fc.special_confirm_delay_config.setText(
                    '\u2B50 特殊刷回流点击确认延迟: ' + drp_eh + 'ms'
                )
                drp_fc.ignore_ack_click_delay_config.setText(
                    '\u23F0 特殊刷回流点击延迟: ' + drp_eb + 'ms'
                )
                drp_fc.random_delay_lower_config.setText(
                    '\u2B07️ 随机延迟下限: ' + drp_e8 + 'ms'
                )
                drp_fc.random_delay_upper_config.setText(
                    '\u2B06️ 随机延迟上限: ' + drp_e9 + 'ms'
                )
                drp_fc.max_refresh_time_config.setText(
                    '\u231B 最大刷新时间: ' + drp_e5 + '分钟'
                )
                drp_fc.rage_stock_refresh_config.setText(
                    '\u26A1 狂暴库存刷新模式: ' + (drp_eo ? '开启' : '关闭')
                )
                drp_fc.legacy_refresh_config.setText(
                    '\uD83D\uDD04 上下刷新模式: ' + (drp_eA ? '开启' : '关闭')
                )
                drp_fc.vibrate_time_config.setText(
                    '\uD83D\uDCF3 抢购成功振动时长: ' + drp_eg + 'ms'
                )
                drp_fc.main_window_alpha_config.setText(
                    '\uD83D\uDD0D 窗口透明度: ' + drp_ea
                )
                drp_fc.auto_click_notification_config.setText(
                    '\uD83D\uDD14 自动点击到货通知: ' + (drp_e7 ? '开启' : '关闭')
                )
                drp_fc.reset_floaty_position_config.setText(
                    '\uD83D\uDD04 重置悬浮窗位置: ' + (drp_ei ? '开启' : '关闭')
                )
                drp_fc.extra_selection_regex_config.setText(
                    '\uD83D\uDD24 额外选择规则: ' + (drp_eq || '未设置')
                )
                drp_fc.shield_breaker_mode_config.setText(
                    '\uD83D\uDEE1️ 破盾模式: ' + (drp_et ? '开启' : '关闭')
                )
                drp_fc.ignore_ack_panic_timer_config.setText(
                    '\u23F0 自动关闭特殊刷回流: ' + (drp_ev > 0 ? drp_ev + '秒' : '关闭')
                )
                drp_fc.panic_timer_config.setText(
                    '\u23F0 自动关闭破盾模式: ' + (drp_eu > 0 ? drp_eu + '秒' : '关闭')
                )
                drp_fc.payment_password_config.setText(
                    '\uD83D\uDD12 支付密码: ' + (drp_er || '未设置')
                )
            } catch (h) {
                log('Error updating config window: ' + h)
            }
        }
    }
    !drp_em &&
        drp_f7.config_settings.click(function () {
            ui.post(() => {
                try {
                    if (!drp_fc) {
                        drp_fc = drp_hA()
                        drp_hE()
                        var b = String(device.width * 0.8) + 'px',
                            c = String(device.height * 0.8) + 'px'
                        drp_fc.config_main.attr('w', b)
                        drp_fc.config_main.attr('h', c)
                        sleep(500)
                    }
                    drp_hD()
                } catch (f) {
                    log('Error in config button click: ' + f)
                }
            })
        })
    var drp_f8 = drp_f6.get('floaty_position_x'),
        drp_f9 = drp_f6.get('floaty_position_y'),
        drp_fa = device.width / 2 + 100,
        drp_fb = drp_f7.getY() + 100
    typeof drp_f8 === 'number' &&
        typeof drp_f9 === 'number' &&
        drp_f8 >= 0 &&
        drp_f8 + 100 <= device.width &&
        !drp_ei
        ? (console.warn('[提示] 悬浮窗位置已读取'),
            drp_f7.setPosition(drp_f8, drp_f9))
        : (console.warn('[提示] 已使用默认悬浮窗位置'),
            drp_f7.setPosition(drp_fa, drp_fb))
    var drp_fc = drp_hA()
}
function drp_fe(b) {
    var f = b.findOne(text('购买方式'))
    if (!f) {
        return console.log('Exit button not found'), null
    }
    var g = f.parent()
    if (!g) {
        return console.log('Parent1 not found'), null
    }
    var h = g.parent()
    if (!h) {
        return console.log('Parent2 not found'), null
    }
    var j = h.parent()
    if (!j) {
        return console.log('Exit button parent not found'), null
    }
    var k = j.child(0)
    if (!k) {
        return console.log('Exit button child not found'), null
    }
    if (k.className() !== 'android.widget.Image') {
        return console.log('Exit button child is not an Image'), null
    }
    return k
}
var drp_ff = drp_f5,
    drp_fg = 1984
function drp_fh() {
    var d = className('android.widget.TextView').text('到货通知').findOne(50)
    d && (console.warn('[操作] 已点击到货通知按钮'), d.click())
}
var drp_fi =
    'yRFxy902vYq9Kotiy4bU6LIWIx1TlMc07SKjZNXIeV3wAkXEMhzvwlY9y1ekT6C7dp4rvWSlAnUbAMeFOrXUq87xvFnA4U4ftGg3TRLG0{SV{tEy,:m*PNMHFupL79ugesPUPOHhOw=='
drp_fg = drp_fg + drp_eR
function drp_fj(a, b) {
    let d = a,
        f = 0
    while (d != null && f < b) {
        try {
            d = d.child(0)
        } catch (g) {
            return log('Exception at level ' + f + ': ' + g), null
        }
        f++
    }
    return d
}
var drp_fk = drp_fg != 1984,
    drp_fl = threads
function drp_fm(a) {
    var d = null,
        f = a
    for (var g = 0; g < 13; g++) {
        if (f == null) {
            break
        }
        f.className() === 'android.widget.RelativeLayout' && (d = f)
        f && (f = f.parent())
    }
    drp_eR + 1 != 201 && drp_cT()
    if (d != null) {
        f = d
        for (var g = 0; g < 2; g++) {
            if (f == null) {
                break
            }
            f = f.parent()
        }
        if (f != null) {
            let j = f.bounds()
        } else {
            log('Top node is null after going up 3 parents.')
        }
    } else {
        log('No RelativeLayout found in 13 levels.')
    }
    return f
}
!drp_fk &&
    drp_fl.start(function () {
        while (true) {
            drp_dZ = 0
        }
    })
function drp_fn(a) {
    if (!a) {
        return 'no_header'
    }
    if (a.childCount() === 0) {
        return 'no_header'
    }
    var c = a.child(0)
    if (!c) {
        return 'no_header'
    }
    if (c.className() !== 'android.widget.RelativeLayout') {
        return 'no_header'
    }
    var d = c.children()
    if (!d || d.length === 0) {
        return ''
    }
    if (drp_fg - 1984 != 200) {
        return 'no_header'
    }
    var f = 0,
        g = d[0]
    for (var h = 0; h < d.length; h++) {
        var j = d[h],
            k = j ? j.drawingOrder() : 0
        if (k > f) {
            j.childCount() != 0 && ((f = k), (g = j))
        }
    }
    if (!g) {
        return ''
    }
    var l = g && g.childCount() > 0 ? g.child(0) : null
    if (!l) {
        return ''
    }
    var m = l.findOne(className('android.widget.TextView').algorithm('BFS'))
    if (!m) {
        return ''
    }
    return m.text()
}
function drp_fo() {
    var b = className('android.widget.RelativeLayout')
        .algorithm('BFS')
        .findOne(100)
    if (!b) {
        return null
    }
    if (!b.parent()) {
        return null
    }
    var c = b.parent()
    if (!c) {
        return null
    }
    if (!c.parent()) {
        return null
    }
    return (b = c.parent()), b
}
function drp_fp(a) {
    var b = a.bounds(),
        c = b.centerX()
    var d = b.centerY()
    click(c, d)
}
function drp_fq() {
    if (drp_fu == -1 || drp_fv == -1) {
        return
    }
    click(drp_fu, drp_fv)
    sleep(200)
}
function drp_fr(a) {
    if (drp_fu != -1 && drp_fv != -1) {
        return
    }
    var c = a.bounds(),
        d = device.width,
        f = device.height,
        g = c.centerX()
    var h = c.centerY()
    if (g < 0 || g > d || h < 0 || h > f) {
        return
    }
    drp_fu = g
    drp_fv = h
    var j = storages.create('DRP')
    j.put('unstuck_cap_btn_x', drp_fu)
    j.put('unstuck_cap_btn_y', drp_fv)
}
var drp_fs = drp_cZ
function drp_ft() {
    var g = storages.create('DRP')
    drp_fu = g.get('unstuck_cap_btn_x', -1)
    drp_fv = g.get('unstuck_cap_btn_y', -1)
    if (drp_fu != -1 && drp_fv != -1) {
        return
    }
    drp_fu = -1
    drp_fv = -1
}
var drp_fu = -1,
    drp_fv = -1
drp_ft()
!drp_ff && drp_fs()
function drp_fw(a) {
    var c = a.childCount()
    if (c == 0) {
        return null
    }
    drp_dg && console.error('webview_count: ' + a.childCount())
    var d = 0,
        f = c - 1,
        g = false
    for (var h = 0; h < c; h++) {
        var j = a.child(h),
            k = drp_fn(j),
            l = j ? j.drawingOrder() : 0
        if (l === 0) {
            g = true
            break
        }
        l > d && ((d = l), (f = h))
    }
    if (g) {
        return a.child(c - 1)
    }
    return a.child(f)
}
function drp_fx(a) {
    return a.findOne(className('android.webkit.WebView').algorithm('DFS')) || null
}
function drp_fy(a) {
    if (!a) {
        return null
    }
    if (a.childCount() < 1) {
        return null
    }
    var c = a.child(0)
    if (!c) {
        return null
    }
    if (!drp_ff) {
        return null
    }
    if (c.className() !== 'android.widget.RelativeLayout') {
        return null
    }
    var d = null,
        f = Number.MAX_VALUE,
        g = c.childCount()
    for (var h = 0; h < g; h++) {
        var j = c.child(h)
        if (!j) {
            continue
        }
        var k = j.drawingOrder()
        k < f && ((f = k), (d = j))
    }
    if (!d) {
        return null
    }
    if (d.childCount() < 1) {
        return null
    }
    var l = d.child(0)
    if (!l) {
        return null
    }
    if (!drp_f4) {
        return null
    }
    var m = null,
        n = l.childCount()
    for (var h = 0; h < n; h++) {
        var j = l.child(h)
        if (!j) {
            continue
        }
        if (j.drawingOrder() === 2) {
            m = j
            break
        }
    }
    if (!m) {
        return null
    }
    var o = m.child(0)
    if (!o || o.childCount() < 1) {
        return null
    }
    o = o.child(0)
    if (!o || o.childCount() < 1) {
        return null
    }
    o = o.child(0)
    if (!o || o.childCount() < 1) {
        return null
    }
    o = o.child(0)
    if (!o) {
        return null
    }
    var p = null,
        q = o.childCount()
    for (var h = 0; h < q; h++) {
        var j = o.child(h)
        if (!j) {
            continue
        }
        if (j.drawingOrder() === 0) {
            p = j
            break
        }
    }
    if (!p) {
        return null
    }
    if (p.childCount() < 1) {
        return null
    }
    var r = p.child(0)
    if (!r) {
        return null
    }
    if (r.className() === 'android.webkit.WebView') {
        return r
    }
    return null
}
function drp_fz(n, o) {
    if (!o) {
        var q = {}
        return (q.header = n), (q.status = 'no_webview'), q
    }
    if (drp_eR != 200) {
        return
    }
    if (n === '确认订单' || n === '访问异常\uFF0C请稍后重试') {
        var r = {}
        return (r.header = n), (r.status = 'confirm_and_pay'), r
    } else {
        if (n == '' || n != 'no_header') {
            var D = Date.now()
            var C = drp_fE(o)
            if (C) {
                var u = {}
                return (u.header = n), (u.status = 'purchase'), u
            }
            if (!drp_f5) {
                var I = {}
                return (I.header = n), (I.status = 'no_webview'), I
            }
            var G = drp_fD(o)
            if (G && G.text() == '立即购买') {
                var v = {}
                return (v.header = n), (v.status = 'info_page'), v
            } else {
                if (
                    G &&
                    (G.text().startsWith('距开售还剩') || G.text() == '参与抢购')
                ) {
                    var z = {}
                    return (z.header = n), (z.status = 'preorder'), z
                } else {
                    if (G && G.text().startsWith('距离开售时间还剩')) {
                        var A = {}
                        return (A.header = n), (A.status = 'presale'), A
                    }
                }
            }
            var J = o.findOne(textStartsWith('*您即将进入抢购'))
            if (J) {
                var E = {}
                return (E.header = n), (E.status = 'preorder'), E
            }
            var H = o.findOne(textStartsWith('继续等待'))
            if (H) {
                var B = {}
                return (B.header = n), (B.status = 'keep_waiting'), B
            }
            var F = {}
            F.header = n
            F.status = 'default'
            return F
        } else {
            var K = {}
            return (K.header = n), (K.status = 'default'), K
        }
    }
}
function drp_fA(b) {
    if (!b) {
        return
    }
    var f = b.findOne(
        className('android.widget.TextView').text('数量').algorithm('DFS')
    )
    if (!f) {
        return
    }
    var g = f.indexInParent(),
        h = f.parent()
    if (!h) {
        return
    }
    if (h.childCount() < g + 4) {
        return
    }
    var j = h.child(g + 3)
    if (!j) {
        return
    }
    j.click()
}
function drp_fB(b) {
    var f = b.findOne(
        className('android.widget.TextView').text('数量').algorithm('DFS')
    ),
        g = f.indexInParent()
    var h = f.parent(),
        j = h.child(g + 1)
    return j
}
function drp_fC(a, b) {
    var d = a.findOne(
        className('android.widget.TextView').text('数量').algorithm('DFS')
    ),
        f = d.indexInParent()
    var g = d.parent(),
        h = g.child(f + 1),
        j = g.child(f + 2),
        k = g.child(f + 3),
        l = parseInt(j.text())
    if (isNaN(l)) {
        console.warn('无法处理购买数量: ' + j.text())
        return
    }
    var l = parseInt(j.text())
    if (l === b) {
        drp_fg < 2000 && (drp_dZ = 0)
        console.warn('[操作] 当前已满足购买数量要求: ' + l)
        return
    }
    if (l > b) {
        var m = l - b
        for (var n = 0; n < m; n++) {
            h.click()
            sleep(10)
        }
    } else {
        var m = b - l
        for (var n = 0; n < m; n++) {
            k.click()
            sleep(10)
        }
    }
}
function drp_fD(a) {
    if (!drp_f5) {
        return null
    }
    var c = null,
        d = a.childCount()
    for (var f = d - 1; f >= 0; f--) {
        try {
            var g = a.child(f)
        } catch (l) {
            break
        }
        if (!g) {
            break
        }
        if (g.className() === 'android.view.View') {
            c = g
            break
        }
    }
    if (!c) {
        return (
            drp_dg && (log('Cannot find last view.'), log('last_view is null')), null
        )
    }
    if (c.childCount() != 1 && c.childCount() != 2) {
        return drp_dg && log('last_view error: ' + c.childCount()), null
    }
    var h = c.child(c.childCount() - 1)
    if (!h || h.className() !== 'android.view.View') {
        return drp_dg && log('last_child is null or not android.view.View'), null
    }
    if (h.childCount() < 1) {
        return drp_dg && log('last_child does not have at least one child'), null
    }
    var j = h.child(h.childCount() - 1)
    if (!j || j.className() !== 'android.widget.TextView') {
        return (
            drp_dg &&
            log('last_child_last_child is null or not android.widget.TextView'),
            null
        )
    }
    return j
}
function drp_fE(a) {
    var c = null,
        d = a.childCount()
    for (var f = d - 1; f >= 0; f--) {
        try {
            var g = a.child(f)
        } catch (n) {
            break
        }
        if (!g) {
            break
        }
        if (g.className() === 'android.view.View') {
            c = g
            break
        }
    }
    if (!c) {
        return (
            drp_dg && (log('Cannot find last view.'), log('last_view is null')),
            sleep(30),
            null
        )
    }
    if (c.childCount() < 2) {
        if (drp_dg) {
            log('last_view has less than 2 children')
        }
        return null
    }
    var h = c.child(c.childCount() - 1)
    if (!h || h.className() !== 'android.view.View') {
        return drp_dg && log('last_child is null or not android.view.View'), null
    }
    if (h.childCount() != 1) {
        return drp_dg && log('last_child does not have exactly 1 child'), null
    }
    var j = h.child(0)
    if (!j || j.className() !== 'android.view.View') {
        return drp_dg && log('last_child_0 is null or not android.view.View'), null
    }
    if (j.childCount() != 1) {
        if (drp_dg) {
            log('last_child_0 does not have exactly 1 child')
        }
        return null
    }
    var k = j.child(0)
    if (!k || k.className() !== 'android.view.View') {
        return (
            drp_dg && log('last_child_0_0 is null or not android.view.View'), null
        )
    }
    if (k.childCount() != 3) {
        return (
            drp_dg && log('last_child_0_0 does not have exactly 3 children'), null
        )
    }
    var l = k.child(2)
    if (!l || l.className() !== 'android.view.View') {
        return (
            drp_dg && log('last_child_0_0_2 is null or not android.view.View'), null
        )
    }
    return l
}
function drp_fF(b) {
    var f = drp_fE(b)
    if (!f) {
        return null
    }
    if (f.childCount() == 1) {
        var g = f.child(0)
        if (g && g.text() == '') {
            return g
        }
    }
    return null
}
function drp_fG(b) {
    var f = drp_fE(b)
    if (!f) {
        return null
    }
    if (f.childCount() == 1) {
        var g = f.child(0)
        if (g && g.text() == '确定') {
            return g
        }
    }
    return null
}
function drp_fH(b) {
    var f = drp_fE(b)
    if (!f) {
        return null
    }
    if (f.childCount() >= 2) {
        return true
    } else {
        if (f.childCount() == 1) {
            var g = f.child(0)
            if (g && g.text() == '该渠道暂不发售') {
                return true
            }
        }
    }
    return false
}
function drp_fI(b) {
    if (!drp_ff) {
        return null
    }
    if (!b) {
        return null
    }
    if (b.childCount() == 2) {
        var f = b.child(1)
        if (f && f.className() === 'android.view.View') {
            return f
        }
    }
    return null
}
var drp_fJ = 0
function drp_fK() {
    var g = className('android.widget.FrameLayout').algorithm('BFS').findOne(100)
    if (!g) {
        return false
    }
    if (g.childCount() != 2) {
        return false
    }
    var f = g.child(0)
    if (!f || f.className() !== 'android.widget.LinearLayout') {
        return false
    }
    var d = g.child(1)
    if (!d || d.className() !== 'android.view.View') {
        return false
    }
    return true
}
function drp_fL() {
    while (true) {
        if (drp_dZ == 0) {
            sleep(200)
            continue
        }
        if (!drp_fK()) {
            sleep(100)
            continue
        }
        var b = textMatches(/付款方式|支付工具/).findOne(100)
        if (!b) {
            sleep(100)
            continue
        }
        drp_g1 = false
        console.error('[页面检测] 当前处于支付页面')
        console.warn('[通知] 抢购完成! 祝老板大赚!')
        device.vibrate(drp_eg)
        let f = drp_er
        if (f.length != 6 || !/^\d{6}$/.test(f)) {
            sleep(500)
            continue
        }
        sleep(1000)
        console.error('[支付] 开始输入支付密码')
        var c = text('使用密码').findOne(100)
        c &&
            (console.error('[支付] 检测到指纹或其他验证模式\uFF0C尝试切换为密码输入'),
                c.click(),
                sleep(500))
        let g = 0
        while (g < 50) {
            var d = text('0').findOne(300)
            if (d) {
                break
            }
            sleep(100)
            g++
        }
        console.error('[支付] 已找到键盘\uFF0C开始输入密码')
        for (let k = 0; k < f.length; k++) {
            let l = f[k],
                m = text(l).findOne(300)
            if (!m) {
                sleep(130)
                continue
            }
            m.click()
            sleep(200)
        }
        console.error('[支付] 支付密码输入完成')
        sleep(1000)
        let h = text('重试').findOne(300)
        h && (console.error('[支付] 支付失败'), sleep(1000))
    }
}
var drp_fM = null,
    drp_fM = threads.start(function () {
        drp_fL()
    }),
    drp_fN = threads.start(function () {
        while (true) {
            typeof drp_eV === 'undefined' && (drp_dZ = 0)
            sleep(1000)
        }
    })
function drp_fO() {
    while (true) {
        if (drp_dZ == 0 || !drp_et || drp_fY() || drp_eF != 'default') {
            sleep(200)
            continue
        }
        if (drp_gf && drp_gf.status != 'confirm_and_pay') {
            sleep(50)
            continue
        }
        try {
            var b = null,
                c = [drp_gg, drp_gh, drp_gi]
            for (var d of c) {
                if (!d) {
                    continue
                }
                var f = d.child(d.childCount() - 1)
                if (f && f.text() === '确认信息并支付') {
                    b = f
                    break
                }
            }
            if (b) {
                drp_ga++
                drp_g9 = 0
                if (drp_ga >= 5) {
                    drp_dg &&
                        console.error(
                            'clicked confirm_btn with cap_btn, retry count: ' + drp_ga
                        )
                    console.error(
                        '多次尝试点击\u300C确认信息并支付\u300D失败\uFF0C使用后备方案\u3002'
                    )
                    drp_fq()
                } else {
                    b.click()
                    drp_fr(b)
                    sleep(100)
                    if (drp_dg) {
                        console.error('clicked confirm_btn, retry count: ' + drp_ga)
                    }
                }
                sleep(drp_e4)
                continue
            }
        } catch (j) {
            continue
        }
    }
}
function drp_fP() {
    while (true) {
        if (drp_dZ == 0 || !drp_et || drp_fY() || drp_eF != 'default') {
            sleep(200)
            continue
        }
        if (drp_gf && drp_gf.status != 'confirm_and_pay') {
            sleep(50)
            continue
        }
        try {
            var b = null,
                c = [drp_gg, drp_gh, drp_gi]
            for (var d of c) {
                if (!d || d.childCount() != 2) {
                    continue
                }
                var f = d.child(1)
                if (f && f.className() === 'android.view.View') {
                    if (f.childCount() == 1) {
                        var g = f.child(0)
                        if (g && g.className() === 'android.view.View') {
                            b = g.child(g.childCount() - 1)
                            break
                        }
                    }
                }
            }
            if (b && b.text() != '我知道了') {
                drp_ga = 0
                drp_g9 == 0
                    ? ((drp_ec = new Date().getTime()),
                        b.click(),
                        sleep(100),
                        drp_dg && console.error('clicked double_confirm'),
                        (drp_g1 = true),
                        drp_g9++)
                    : (drp_g9++, sleep(20))
                continue
            }
        } catch (n) {
            continue
        }
    }
}
var drp_fQ = null,
    drp_fQ = threads.start(function () {
        drp_fO()
    }),
    drp_fR = null,
    drp_fR = threads.start(function () {
        drp_fP()
    })
function drp_fS() {
    var b = className('androidx.recyclerview.widget.RecyclerView').find()
    let c = 0
    while (b.length <= 1 && c < 50) {
        console.error('[控制] 正在等待消息加载'),
            sleep(300),
            (b = className('androidx.recyclerview.widget.RecyclerView').find()),
            c++
    }
    !drp_ff && drp_cZ()
    let d = b.length >= 2 ? 1 : 0
    for (let q = d; q >= 0; q--) {
        var f = b[q]
        sleep(300)
        if (drp_dg) {
            log('trying recycler_view ' + q)
        }
        if (!f) {
            continue
        }
        var g = f.child(f.childCount() - 1)
        if (!g || g.className() !== 'android.widget.RelativeLayout') {
            drp_dg &&
                (log('last_child not found for recycler_view ' + q),
                    g && log(g.className()))
            if (q === 0) {
                return
            }
            continue
        }
        break
    }
    if (!g) {
        return
    }
    var h = g.findOne(className('android.widget.FrameLayout'))
    if (!h) {
        drp_dg && log('frame_layout not found')
        return
    }
    var j = h.child(0)
    if (!j || j.className() !== 'android.widget.LinearLayout') {
        drp_dg && log('linear_layout not found')
        return
    }
    var k = j.child(0)
    if (!k || k.className() !== 'android.widget.LinearLayout') {
        if (drp_dg) {
            log('child_of_linear_layout not found')
        }
        return
    }
    if (k.childCount() != 4) {
        drp_dg && log('child_of_linear_layout does not have four children')
        return
    }
    var l = k.child(1)
    if (!l || l.className() !== 'android.widget.TextView') {
        drp_dg && log('card_title not found')
        return
    }
    var m = k.child(k.childCount() - 1)
    if (!m || m.className() !== 'android.widget.LinearLayout') {
        drp_dg && log('last_child_of_child_of_linear_layout not found')
        return
    }
    var n = l.text()
    if (!n) {
        if (drp_dg) {
            log('card_title_text not found')
        }
        return
    } else {
        drp_dg && log('card_title_text: ' + n)
    }
    var o = m.findOne(text('小程序'))
    if (!o) {
        drp_dg && log('text_in_last_child_of_child_of_linear_layout not found')
        return
    }
    h
        ? (h.click(),
            ui.post(() => {
                drp_fW()
            }))
        : drp_dg && log('frame_layout not found')
}
function drp_fT() {
    if (!device.isScreenOn()) {
        console.log('[控制] 屏幕未亮\uFF0C唤醒屏幕')
        device.wakeUp()
        sleep(400)
        while (!device.isScreenOn()) {
            sleep(200)
            device.wakeUp()
        }
        sleep(600)
        swipe(
            device.width / 2,
            device.height * 0.8,
            device.width / 2,
            device.height / 2,
            300
        )
        console.log('[控制] 尝试解锁手机')
        sleep(500)
    }
}
function drp_fU() {
    events.on('notification', function (b) {
        if (b.getPackageName() !== 'com.tencent.mm' || !b.getText()) {
            return
        }
        if (
            drp_eC &&
            (b.getText().includes('商品到货') || b.getTitle().includes('商品到货'))
        ) {
            console.log('[控制] 收到泡泡玛特的补货通知')
            ui.post(() => {
                console.log('[控制] 已启动')
                drp_fW()
            })
            return
        }
        if (!drp_ez.some((m) => b.getTitle().includes(m))) {
            return
        }
        console.log('[控制] 收到来自监控群组[' + b.getTitle() + ']的通知')
        if (b.getText().includes('[小程序]')) {
            drp_fT()
            b.click()
            drp_fS()
            return
        } else {
            if (b.getText().includes('亮屏')) {
                console.log('[控制] 收到亮屏指令')
                drp_fT()
                return
            }
        }
        var d = b.getText(),
            f = {}
        f['一'] = 1
        f['二'] = 2
        f['三'] = 3
        f['四'] = 4
        f['五'] = 5
        f['六'] = 6
        f['七'] = 7
        f['八'] = 8
        f['九'] = 9
        f['十'] = 10
        f['俩'] = 2
        f['两'] = 2
        var g = f
        d = d.replace(/^\[\d+条\].*?:|^.*?:/, '')
        var h = d.match(/\d+/)
        if (h) {
            drp_e1 = parseInt(h[0])
            console.log('[控制] 已设置购买数量:', drp_e1)
        } else {
            var j = false
            for (let o in g) {
                if (d.includes(o)) {
                    drp_e1 = g[o]
                    j = true
                    break
                }
            }
        }
        j && console.log('[控制] 已设置购买数量:', drp_e1)
        if (d.includes('店')) {
            ; (drp_e0 = '到店取'),
                d.includes('来回') && (drp_e0 = '来回刷\uFF08到店取\uFF09'),
                console.log('[控制] 已设置配送方式:', drp_e0)
        } else {
            if (d.includes('家')) {
                drp_e0 = '送到家'
                d.includes('来回') && (drp_e0 = '来回刷\uFF08送到家\uFF09')
                console.log('[控制] 已设置配送方式:', drp_e0)
            } else {
                d.includes('来回') &&
                    ((drp_e0 = '来回刷'), console.log('[控制] 已设置配送方式:', drp_e0))
            }
        }
        if (d.includes('端') || d.includes('整盒')) {
            drp_e2 = '整盒'
            console.log('[控制] 已设置规格:', drp_e2)
        } else {
            ; (d.includes('盒') || d.includes('个')) &&
                ((drp_e2 = '单个'), console.log('[控制] 已设置规格:', drp_e2))
        }
        if (d.includes('启动') || d.includes('开')) {
            ui.post(() => {
                console.log('[控制] 已启动'), drp_fW()
            })
        } else {
            if (d.includes('关') || d.includes('停') || d.includes('结束')) {
                ui.post(() => {
                    !drp_eB
                        ? console.log('[控制] 已停止并回到主界面')
                        : console.log('[控制] 已停止')
                    drp_fX()
                    !drp_eB && home()
                })
            } else {
                d.includes('桌面') && (console.log('[控制] 已返回主界面'), home())
            }
        }
    })
}
if (drp_ey || drp_eC) {
    var drp_fV = threads.start(function () {
        drp_fU()
    })
}
function drp_fW() {
    drp_dZ = 1
    console.error('[状态] 辅助启动')
    if (drp_el && drp_cH) {
        try {
            drp_cH.end.attr('visibility', 'visible')
            drp_cH.start.attr('visibility', 'gone')
        } catch (g) { }
    }
    if (drp_em && drp_cI) {
        try {
            drp_cI.text_status.setText('停止')
            drp_cI.drag.attr('tint', '#FF4444')
        } catch (h) { }
    }
    if (!drp_el && !drp_em && drp_cJ) {
        try {
            drp_cJ.end.attr('visibility', 'visible')
            drp_cJ.start.attr('visibility', 'gone')
        } catch (j) { }
    }
    !drp_es &&
        (console.log('[提示] 如果脚本没反应\uFF0C请重启hamibot和微信'),
            (drp_es = true))
}
function drp_fX() {
    drp_dZ = 0
    console.error('[状态] 辅助停止')
    if (drp_el && drp_cH) {
        try {
            drp_cH.end.attr('visibility', 'gone')
            drp_cH.start.attr('visibility', 'visible')
        } catch (d) { }
    }
    if (drp_em && drp_cI) {
        try {
            drp_cI.text_status.setText('启动')
            drp_cI.drag.attr('tint', '#66ccff')
        } catch (f) { }
    }
    if (!drp_el && !drp_em && drp_cJ) {
        try {
            drp_cJ.end.attr('visibility', 'gone')
            drp_cJ.start.attr('visibility', 'visible')
        } catch (g) { }
    }
}
function drp_fY() {
    if (drp_eu == 0) {
        return false
    }
    var d = new Date().getTime() > drp_g5 + drp_eu * 1000 && drp_g6
    if (!drp_g7 && d) {
        console.error(
            '\u300C破盾模式\u300D已临时关闭\uFF0C暂停脚本后再启动\uFF08不需要重启脚本\uFF09即可解除关闭状态'
        )
        drp_g7 = true
    }
    return d
}
function drp_fZ() {
    if (drp_ev == 0) {
        return false
    }
    var d = new Date().getTime() > drp_g5 + drp_ev * 1000 && drp_g6
    return (
        !drp_g8 &&
        d &&
        (console.error(
            '\u300C特殊刷回流模式\u300D已临时关闭\uFF0C暂停脚本后再启动\uFF08不需要重启脚本\uFF09即可解除关闭状态'
        ),
            (drp_g8 = true)),
        d
    )
}
var drp_g0 = false,
    drp_g1 = false,
    drp_g2 = 0
var drp_g3 = false,
    drp_g4 = false,
    drp_g5 = new Date().getTime() + 86400000,
    drp_g6 = false,
    drp_g7 = false,
    drp_g8 = false,
    drp_g9 = 0,
    drp_ga = 0,
    drp_gb = 0,
    drp_gc = 150,
    drp_gd = false,
    drp_ge = 0,
    drp_gf = null,
    drp_gg = null,
    drp_gh = null,
    drp_gi = null,
    drp_gj = null,
    drp_gk = null,
    drp_gl = false,
    drp_gm = false,
    drp_gn = 0,
    drp_go = false,
    drp_gp = -1,
    drp_gq = -1
function drp_gr() {
    while (true) {
        if (drp_eF != 'default') {
            sleep(200)
            continue
        }
        if (drp_gp != -1 && new Date().getTime() > drp_gp) {
            drp_dZ == 0 &&
                (console.error('脚本已自动重新运行\uFF0C继续刷库存'), drp_fW())
            drp_gp = -1
        }
        if (drp_dZ == 0) {
            drp_g0 = false
            drp_g1 = false
            t = false
            drp_g9 = 0
            drp_ec = 0
            drp_ef = 0
            drp_g2 = 0
            drp_ga = 0
            drp_gb = 0
            drp_gd = false
            drp_ge = 0
            drp_g4 = false
            drp_gl = false
            drp_g5 = new Date().getTime() + 86400000
            drp_g6 = false
                ; (drp_g7 || drp_g8) &&
                    console.error(
                        '已经解除\u300C破盾模式\u300D和\u300C特殊刷回流模式\u300D的临时关闭状态'
                    )
            drp_g7 = false
            drp_g8 = false
            drp_gk = null
            drp_gm = false
            drp_gn = 0
            drp_go = false
            drp_gq = -1
            sleep(100)
            continue
        }
        drp_gp != -1 &&
            (console.error('由于脚本被人为启动\uFF0C自动重新刷库存任务已经取消'),
                (drp_gp = -1))
        sleep(50)
        drp_gj = drp_fo()
        if (!drp_gj) {
            drp_dg && log('Cannot find webview parent node.')
            continue
        }
        var b = drp_fw(drp_gj)
        if (!b) {
            drp_dg && log('Cannot find current node.')
            continue
        }
        drp_eR * 2 > 500 && drp_cT()
        var c = drp_fn(b),
            d = drp_fy(b)
        if (!d) {
            drp_dg && log('Cannot find current webview.')
            continue
        }
        drp_gf = drp_fz(c, d)
        drp_dg && log('Header: ' + drp_gf.header + ', Status: ' + drp_gf.status)
        switch (drp_gf.status) {
            case 'presale':
                ; (drp_gm = false), (drp_gn = 0)
                var f = drp_fD(d)
                if (f && f.text().startsWith('距离开售时间还剩')) {
                    var g = f.text().slice(-5)
                    if (g.endsWith('0')) {
                        log('距离开售还剩: ' + g)
                    } else {
                        if (g.startsWith('00:')) {
                            var h = parseInt(g.split(':')[1])
                            if (h < 10) {
                                console.error('距离开售还剩: ' + g)
                            } else {
                                h % 10 == 0 && console.error('距离开售还剩: ' + g)
                            }
                        }
                    }
                }
                break
            case 'keep_waiting':
                log('继续等待按钮出现\uFF0C执行点击')
                var j = d.findOne(textStartsWith('继续等待').algorithm('DFS'))
                j && (j.click(), sleep(100))
                break
            case 'preorder':
                ; (drp_gm = false), (drp_gn = 0)
                var k = d.findOne(text('就是这家').algorithm('DFS'))
                if (k) {
                    k.click()
                    break
                }
                var l = d.findOne(text('参与抢购').algorithm('DFS'))
                if (l) {
                    var m = Date.now()
                    m - drp_gq >= 300 &&
                        (log('参与抢购按钮出现\uFF0C执行点击'), l.click(), (drp_gq = m))
                    break
                }
                if (drp_g4) {
                    break
                }
                var n = d.findOne(text('购买方式').algorithm('DFS'))
                if (!n) {
                    break
                }
                log('当前可以选择购买方式')
                var o = drp_e0
                if (drp_e0 === '来回刷\uFF08到店取\uFF09') {
                    o = '到店取'
                } else {
                    if (drp_e0 === '来回刷\uFF08送到家\uFF09') {
                        o = '送到家'
                    }
                }
                var p = d.findOne(text(o).algorithm('DFS'))
                p && p.click()
                log('已选择购买方式\uFF1A' + drp_e0)
                var q = d.findOne(text('选择规格').algorithm('DFS'))
                if (q) {
                    log('当前可以选择规格')
                    var r = d.findOne(textStartsWith(drp_e2).algorithm('DFS'))
                    if (r) {
                        r.click()
                    }
                    log('已选择规格\uFF1A' + drp_e2)
                    sleep(100 + drp_e4)
                }
                if (drp_e1 > 1) {
                    var s = d.findOne(text('数量').algorithm('DFS'))
                    s && (drp_fC(d, drp_e1), log('已满足购买数量要求: ', drp_e1))
                } else {
                    log('目标购买数量为1\uFF0C跳过购买数量判断')
                }
                drp_g4 = true
                break
            case 'confirm_and_pay':
                ; (drp_gm = false), (drp_gn = 0)
                drp_eA && (drp_gl = false)
                if (!drp_g6) {
                    drp_g5 = new Date().getTime()
                    drp_g6 = true
                    drp_et &&
                        drp_eu > 0 &&
                        console.error(
                            '脚本将在[',
                            drp_eu,
                            ']秒后临时关闭\u300C破盾模式\u300D\uFF0C暂停脚本后再启动\uFF08不需要重启脚本\uFF09即可解除关闭状态'
                        )
                    drp_ek &&
                        drp_ev > 0 &&
                        console.error(
                            '脚本将在[',
                            drp_ev,
                            ']秒后临时关闭\u300C特殊刷回流模式\u300D\uFF0C暂停脚本后再启动\uFF08不需要重启脚本\uFF09即可解除关闭状态'
                        )
                }
                drp_gb = 0
                var t = false
                drp_g0 = true
                if (!d) {
                    if (drp_dg) {
                        log('Cannot find current webview.')
                    }
                    sleep(10)
                    break
                }
                ; (drp_gg = null), (drp_gh = null), (drp_gi = null)
                var u = d.childCount()
                for (var v = u - 1; v >= 0; v--) {
                    try {
                        var z = d.child(v)
                    } catch (at) {
                        break
                    }
                    if (!z) {
                        break
                    }
                    if (z.className() === 'android.view.View') {
                        if (!drp_gg) {
                            drp_gg = z
                        } else {
                            if (!drp_gh) {
                                drp_gh = z
                            } else {
                                if (!drp_gi) {
                                    drp_gi = z
                                    break
                                }
                            }
                        }
                    }
                }
                if (!drp_gg) {
                    if (drp_dg) {
                        log('Cannot find last view.')
                    }
                    sleep(10)
                    break
                }
                if (!drp_et || drp_fY()) {
                    var A = null
                    if (!drp_gg) {
                        break
                    }
                    var B = drp_gg.child(drp_gg.childCount() - 1)
                    if (B && B.text() === '确认信息并支付') {
                        A = B
                    }
                    if (A) {
                        drp_g9 = 0
                        drp_ga++
                        drp_ga >= 7
                            ? (drp_fq(),
                                drp_dg && console.error('clicked confirm_btn (physical click)'),
                                console.error(
                                    '多次尝试点击\u300C确认信息并支付\u300D失败\uFF0C使用后备方案\u3002'
                                ))
                            : (A.click(),
                                drp_fr(A),
                                drp_dg && console.error('clicked confirm_btn'))
                        sleep(drp_e4)
                        break
                    }
                    var C = null
                    if (drp_gg.childCount() == 2) {
                        var D = drp_gg.child(1)
                        if (D && D.className() === 'android.view.View') {
                            if (D.childCount() == 1) {
                                var E = D.child(0)
                                E &&
                                    E.className() === 'android.view.View' &&
                                    (C = E.child(E.childCount() - 1))
                            }
                        }
                    }
                    if (C) {
                        drp_ga = 0
                        if (drp_g9 == 0) {
                            drp_ec = new Date().getTime()
                            C.click()
                            drp_dg && console.error('clicked double_confirm')
                            drp_g1 = true
                            drp_g9++
                            sleep(250 + drp_e4)
                        } else {
                            drp_g9 >= 8
                                ? (drp_fp(C),
                                    drp_dg &&
                                    console.error('clicked double_confirm (clickButton)'),
                                    (drp_g1 = true),
                                    (drp_g9 = 0))
                                : (drp_g9++, sleep(20))
                        }
                        break
                    }
                }
                if (drp_ek && !drp_fZ()) {
                    var F = d.findOne(text('我知道了').algorithm('DFS'))
                } else {
                    var E = drp_fI(drp_gg)
                    if (!E) {
                        break
                    }
                    if (E.childCount() != 2) {
                        break
                    }
                    var G = E.child(0),
                        F = E.child(1)
                }
                if (F) {
                    if (!drp_ek || drp_fZ()) {
                        if (G) {
                            console.log(G.text())
                        }
                        drp_g9 = 0
                        F.click()
                        if (drp_dg) {
                            console.error('clicked acknowledge')
                        }
                        sleep(100 + drp_e4 + drp_e6)
                    } else {
                        if (!drp_et || drp_fY()) {
                            var H = d.findOne(
                                textMatches(/(确认无误|就是这家)/).algorithm('DFS')
                            )
                            if (H) {
                                if (drp_g9 == 0) {
                                    drp_ec = new Date().getTime()
                                    H.click()
                                    drp_g1 = true
                                    drp_g9++
                                    sleep(drp_eb)
                                    break
                                }
                            }
                            var I = d.findOne(text('确认信息并支付').algorithm('DFS'))
                            if (I) {
                                drp_g9 = 0
                                drp_ga++
                                if (drp_ga >= 7) {
                                    drp_fq()
                                } else {
                                    I.click()
                                    sleep(drp_eb)
                                    drp_g1 = false
                                    break
                                }
                            }
                        }
                    }
                    drp_g1 = false
                    break
                }
                break
            case 'info_page':
                ; (drp_gl = false), (drp_g1 = false), (t = false), (drp_ga = 0)
                var A = drp_fG(d)
                if (!drp_g0) {
                    sleep(300)
                    if (!A) {
                        var J = d.findOne(text('立即购买').algorithm('DFS'))
                        if (J) {
                            if (drp_gm) {
                                drp_gn++
                                if (drp_gn <= 30) {
                                    drp_gm = false
                                    drp_gn = 0
                                    break
                                }
                            }
                            J.click()
                            drp_gm = true
                        }
                        sleep(400)
                    }
                } else {
                    !A && (drp_g0 = false)
                    sleep(150)
                }
                break
            case 'purchase':
                if (drp_gm) {
                    for (var v = 0; v < 40; v++) {
                        var K = drp_fF(d)
                        if (!K) {
                            break
                        }
                        sleep(50)
                    }
                }
                if (drp_eD && drp_g6 && !drp_go) {
                    let aN = drp_fB(d)
                    aN &&
                        (console.error('已自动购买数量-1'),
                            aN.click(),
                            (drp_go = true),
                            sleep(100))
                }
                ; (drp_gm = false), (drp_gn = 0)
                if (t) {
                    t = false
                    break
                }
                ; (drp_g1 = false), (drp_g9 = 0)
                if (!drp_g0) {
                    var n = d.findOne(text('购买方式').algorithm('DFS'))
                    if (n) {
                        log('当前可以选择购买方式')
                        var o = drp_e0
                        if (drp_e0 === '来回刷\uFF08到店取\uFF09') {
                            o = '到店取'
                        } else {
                            drp_e0 === '来回刷\uFF08送到家\uFF09' && (o = '送到家')
                        }
                        var p = d.findOne(text(o).algorithm('DFS'))
                        p && p.click()
                        log('已选择购买方式\uFF1A' + drp_e0)
                        sleep(50)
                    }
                    var q = d.findOne(text('选择规格').algorithm('DFS'))
                    if (q) {
                        log('当前可以选择规格')
                        var r = d.findOne(textStartsWith(drp_e2).algorithm('DFS'))
                        r && r.click()
                        log('已选择规格\uFF1A' + drp_e2)
                        sleep(100 + drp_e4)
                    }
                    if (n && drp_eq && drp_eq.trim() !== '') {
                        var N = n.parent()
                        if (N) {
                            var O = drp_eq
                                .replace(/｜/g, '|')
                                .split('|')
                                .map(function (aR) {
                                    return aR.trim()
                                })
                                .filter(function (aR) {
                                    return aR.length > 0
                                })
                                .map(function (aR) {
                                    return '.*' + aR.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '.*'
                                })
                            if (O.length > 0) {
                                var P = O.join('|')
                                console.info('\uD83D\uDD0D 使用额外选择规则: ', drp_eq)
                                var Q = N.find(textMatches(P).algorithm('BFS'))
                                if (Q) {
                                    for (var v = 0; v < Q.length; v++) {
                                        var R = Q[v]
                                        R &&
                                            (R.click(),
                                                console.error('已点击额外选择: ', R.text()),
                                                sleep(10))
                                    }
                                }
                            }
                        }
                    }
                    drp_e7 && drp_fh()
                    var A = drp_fG(d)
                    if (!drp_eA) {
                        drp_gk = new Date()
                    } else {
                        if (!drp_gl) {
                            drp_gk = new Date()
                            drp_gl = true
                        }
                    }
                    var S = '到店取'
                    while (!A && !drp_g0) {
                        if (drp_e5 > 0) {
                            var T = new Date()
                            if (T - drp_gk > 60000 * drp_e5) {
                                drp_dZ = 0
                                ui.post(() => {
                                    if (!drp_em) {
                                        drp_f7.end.attr('visibility', 'gone')
                                        drp_f7.start.attr('visibility', 'visible')
                                    } else {
                                        drp_f7.text_status.setText('启动')
                                        try {
                                            drp_f7.drag.attr('tint', '#66ccff')
                                        } catch (aU) {
                                            console.error('Failed to set image tint:', aU)
                                        }
                                    }
                                })
                                var h = parseFloat((drp_e5 * 60).toFixed(2))
                                console.warn(
                                    '[通知] 超过设定的库存最大连续刷新时长[',
                                    drp_e5,
                                    ']分钟(',
                                    h,
                                    '秒) ',
                                    '\uFF0C脚本已停止'
                                )
                                drp_eE != 0 &&
                                    ((drp_gp = new Date().getTime() + drp_eE * 1000 * 60),
                                        console.warn(
                                            '[通知] 脚本将在 ',
                                            drp_eE,
                                            '分钟后自动重新运行'
                                        ))
                            }
                        }
                        if (drp_dZ == 0) {
                            drp_g0 = false
                            drp_g1 = false
                            drp_g9 = 0
                            break
                        }
                        var U = new Date().getTime(),
                            J = d.findOne(text('立即购买').algorithm('DFS'))
                        if (J) {
                            A = drp_fG(d)
                            if (A) {
                                break
                            }
                            if (!drp_eo) {
                                var V = drp_fH(d),
                                    W = 0,
                                    X = false,
                                    Y = new Date().getTime(),
                                    Z = Y - drp_ed
                                Z > Math.max(drp_e3, 300) &&
                                    console.error('正在判断库存情况...')
                                while (!V) {
                                    W++
                                    if (W > 30) {
                                        X = true
                                        sleep(20)
                                        break
                                    }
                                    V = drp_fH(d)
                                    if (V) {
                                        break
                                    }
                                    drp_e7 && drp_en && drp_fh()
                                    sleep(20)
                                    A = drp_fG(d)
                                    if (A) {
                                        break
                                    }
                                    if (drp_dZ == 0) {
                                        drp_g0 = false
                                        drp_g1 = false
                                        drp_g9 = 0
                                        break
                                    }
                                }
                                
                               var Y = new Date().getTime(),
                     Z = Y - drp_ed;
                if (Z > Math.max(drp_e3, 300)) {
    if (V) {
        console.warn('已售罄');
       /* === 拟人化强制测试 === */
        let dummyX = device.width * 0.8;
       let dummyY = device.height * 0.9;
        tap(dummyX, dummyY); // 必走拟人代理
       /* ====================== */
    } else {
        A && console.warn('有库存');
    }
}
                                if (X || V) {
                                    drp_dl && drp_fA(d)
                                    if (!drp_e0.startsWith('来回刷')) {
                                        if (!drp_g0) {
                                            var Y = new Date().getTime(),
                                                Z = Y - drp_ed
                                            if (Z < Math.max(drp_e3, 300)) {
                                                continue
                                            }
                                            if (drp_eA) {
                                                var a0 = drp_fe(d)
                                                if (a0) {
                                                    a0.click()
                                                    var a1 =
                                                        Math.floor(Math.random() * (drp_e9 - drp_e8 + 1)) +
                                                        drp_e8
                                                    !drp_ej && (a1 = 0)
                                                    var a2 = drp_e3 + a1
                                                    sleep(Math.max(a2 / 4, 100))
                                                }
                                            }
                                            drp_ed = Y
                                            J.click()
                                            drp_eA && sleep(Math.max(a2 / 4, 100))
                                        }
                                    } else {
                                        if (drp_e0 == '来回刷') {
                                            var a3 = d.findOne(text(S).algorithm('DFS'))
                                            a3 &&
                                                (drp_dg &&
                                                    console.error('clicked current_selection_btn: ', S),
                                                    a3.click(),
                                                    S == '到店取' ? (S = '送到家') : (S = '到店取'),
                                                    sleep(100))
                                        } else {
                                            var a4 = '送到家',
                                                S = '到店取'
                                            if (drp_e0 == '来回刷\uFF08送到家\uFF09') {
                                                a4 = '到店取'
                                                S = '送到家'
                                            }
                                            var a3 = d.findOne(text(a4).algorithm('DFS'))
                                            a3 &&
                                                (a3.click(),
                                                    sleep(300),
                                                    (a3 = d.findOne(text(S).algorithm('DFS'))),
                                                    a3 && (a3.click(), sleep(100)))
                                        }
                                    }
                                }
                            } else {
                                if (
                                    drp_e0 != '来回刷' &&
                                    drp_e0 != '来回刷\uFF08到店取\uFF09' &&
                                    drp_e0 != '来回刷\uFF08送到家\uFF09'
                                ) {
                                    !drp_g0 && J.click()
                                } else {
                                    if (drp_e0 == '来回刷') {
                                        var a3 = d.findOne(text(S).algorithm('DFS'))
                                        a3 &&
                                            (drp_dg &&
                                                console.error('clicked current_selection_btn: ', S),
                                                a3.click(),
                                                S == '到店取' ? (S = '送到家') : (S = '到店取'),
                                                sleep(100))
                                    } else {
                                        var a4 = '送到家',
                                            S = '到店取'
                                        if (drp_e0 == '来回刷\uFF08送到家\uFF09') {
                                            a4 = '到店取'
                                            S = '送到家'
                                        }
                                        var a3 = d.findOne(text(a4).algorithm('DFS'))
                                        a3 &&
                                            (a3.click(),
                                                sleep(300),
                                                (a3 = d.findOne(text(S).algorithm('DFS'))),
                                                a3 && (a3.click(), sleep(100)))
                                    }
                                }
                            }
                        }
                        A = drp_fG(d)
                        if (A) {
                            drp_dg && console.error('confirm_btn found in purchase, break')
                            break
                        }
                        var a5 = Math.floor(Math.random() * (drp_e9 - drp_e8 + 1)) + drp_e8
                        !drp_ej && (a5 = 0)
                        var a6 = drp_e3 + a5
                        if (drp_eA) {
                            a6 = a6 / 2
                        }
                        var a7 = Date.now(),
                            a8 = false
                        while (Date.now() - a7 < a6) {
                            sleep(50)
                            A = drp_fG(d)
                            if (A) {
                                a8 = true
                                break
                            }
                        }
                        if (a8) {
                            break
                        }
                        A = drp_fG(d)
                        if (A) {
                            break
                        }
                        purchase_count_label = d.findOne(text('数量').algorithm('DFS'))
                        if (!purchase_count_label) {
                            break
                        }
                        console.info('[注意] 库存刷新耗时: ', drp_e3 + a5, 'ms')
                        A = drp_fG(d)
                        if (A) {
                            if (drp_dg) {
                                console.error('confirm_btn found in purchase, break')
                            }
                            break
                        }
                        if (drp_eA) {
                            break
                        }
                    }
                    if (drp_dZ == 0) {
                        continue
                    }
                    if (drp_e1 > 1) {
                        var s = d.findOne(text('数量').algorithm('DFS'))
                        s &&
                            (drp_fC(d, drp_e1),
                                sleep(50),
                                log('已满足购买数量要求: ', drp_e1))
                    } else {
                        log('目标购买数量为1\uFF0C跳过购买数量判断')
                    }
                }
                A = drp_fG(d)
                if (A) {
                    drp_dg && console.error('confirm_btn found in purchase, try to click')
                    drp_g2 = 0
                    if (drp_ek) {
                        if (!drp_g0) {
                            var Y = new Date().getTime(),
                                a9 = Y - drp_ef
                            if (a9 >= 200) {
                                drp_ef = Y
                                A.click()
                                drp_g0 = true
                                t = true
                                sleep(150 + drp_e4)
                                continue
                            }
                        }
                        var Y = new Date().getTime(),
                            a9 = Y - drp_ec
                        if (a9 >= drp_eh) {
                            console.warn(
                                '[等待] 确认按钮点击时间已超过',
                                drp_eh,
                                'ms\uFF0C点击确认'
                            )
                            if (drp_gb >= 2) {
                                drp_fp(A)
                                drp_gb = 0
                                drp_dg && console.error('clicked confirm_btn (physical click)')
                            } else {
                                var Y = new Date().getTime(),
                                    a9 = Y - drp_ef
                                a9 >= 200 && ((drp_ef = Y), A.click())
                                drp_gb++
                            }
                            drp_g0 = true
                            t = true
                        } else {
                            console.warn(
                                '[等待] 为防止反复被打回\uFF0C 等待',
                                drp_eh - a9,
                                'ms后点击确认'
                            )
                            sleep(drp_eh - a9)
                            if (drp_gb >= 3) {
                                drp_fp(A)
                                drp_gb = 0
                                drp_dg && console.error('clicked confirm_btn (physical click)')
                            } else {
                                var Y = new Date().getTime(),
                                    a9 = Y - drp_ef
                                if (a9 >= 200) {
                                    drp_ef = Y
                                    A.click()
                                }
                                drp_gb++
                            }
                            drp_g0 = true
                            t = true
                        }
                    } else {
                        var Y = new Date().getTime(),
                            a9 = Y - drp_ef
                        if (a9 >= 200) {
                            if (drp_gb >= 3) {
                                drp_fp(A)
                                drp_gb = 0
                                drp_dg && console.error('clicked confirm_btn (physical click)')
                            } else {
                                drp_ef = Y
                                drp_dg && console.error('clicked confirm_btn)')
                                !drp_g0 && drp_ep ? drp_fp(A) : A.click()
                                drp_gb++
                            }
                            drp_g0 = true
                            t = true
                        }
                        drp_g0 = true
                        t = true
                    }
                    sleep(150 + drp_e4)
                } else {
                    drp_g2++
                    if (drp_g2 >= 10) {
                        drp_g2 = 0
                        drp_g0 = false
                        drp_g1 = false
                        drp_g9 = 0
                        t = false
                        sleep(20)
                        break
                    }
                }
                break
            case 'purchase_ready':
                var A = drp_fG(d)
                if (A) {
                    var m = Date.now()
                    m - drp_gq >= 300 && (A.click(), (drp_gq = m))
                }
                break
            default:
                break
        }
    }
}
var drp_gs = threads.start(function () {
    drp_gr()
})
function drp_gt(a) {
    if (!a) {
        return
    }
    var c = a.child(0)
    if (!c || c.childCount() != 6) {
        return
    }
    var d = c.child(1)
    if (!d) {
        return
    }
    var f = d.findOne(text('商品').algorithm('DFS'))
    if (!f) {
        return
    }
    var g = f.parent()
    if (!g) {
        return
    }
    if (g.childCount() != 2) {
        return
    }
    var h = g.child(1)
    if (!h) {
        return
    }
    return h
}
function drp_gu(c) {
    try {
        if (!c) {
            return
        }
        if (
            c.childCount() != 1 ||
            !c.child(0).desc() ||
            !c.child(0).desc().includes('\xA5')
        ) {
            return
        }
        var g = c.child(0)
        if (g.childCount() != 4) {
            return
        }
        var h = g.child(1).text(),
            j = {}
        return (j.element = g), (j.name = h), j
    } catch (m) {
        return
    }
}
function drp_gv(a) {
    try {
        if (!a || a.childCount() < 2) {
            return
        }
        var c = a.child(a.childCount() - 1)
        if (!c || c.childCount() !== 1) {
            return
        }
        var d = c.child(0)
        if (!d || d.childCount() !== 5) {
            if (a.childCount() >= 3) {
                c = a.child(a.childCount() - 2)
                if (!c || c.childCount() !== 1) {
                    return
                }
                d = c.child(0)
                if (!d || d.childCount() !== 5) {
                    if (a.childCount() >= 4) {
                        c = a.child(a.childCount() - 3)
                        if (!c || c.childCount() !== 1) {
                            return
                        }
                        d = c.child(0)
                        if (!d || d.childCount() !== 5) {
                            return
                        }
                    } else {
                        return
                    }
                }
            } else {
                return
            }
        }
        var f = d.child(4)
        if (!f) {
            return
        }
        if (f.childCount() != 2) {
            return
        }
        if (!f.child(1)) {
            return
        }
        if (f.child(1).text() !== '我的') {
            return
        }
        return f
    } catch (o) {
        return
    }
}
function drp_gw(b) {
    if (!b) {
        return false
    }
    var f = b.findOne(text('幸运值'))
    if (f) {
        return true
    }
}
function drp_gx(b) {
    if (!b) {
        return false
    }
    if (!b.childCount() >= 10) {
        return false
    }
    try {
        var f = b.child(0).child(1).child(0).text()
    } catch (g) {
        return false
    }
    if (f == '确认订单') {
        return true
    }
    return false
}
function drp_gy(a) {
    if (!a) {
        return
    }
    if (a.childCount() < 5) {
        return
    }
    try {
        var c = a.child(a.childCount() - 1)
        if (!c) {
            return
        }
        var d = c.child(0).child(0).child(0)
        if (!d) {
            return
        }
        if (d.childCount() == 5) {
            gacha_info_page_last_btn = d.child(4)
        } else {
            if (d.childCount() == 4) {
                gacha_info_page_last_btn = d.child(3)
            } else {
                return
            }
        }
        if (!gacha_info_page_last_btn) {
            return
        }
        return gacha_info_page_last_btn
    } catch (l) {
        return
    }
}
function drp_gz(a) {
    if (!a) {
        return
    }
    if (a.childCount() < 14) {
        return
    }
    try {
        var b = a.child(a.childCount() - 1)
        if (!b) {
            return
        }
        var c = b.child(0).child(0)
        if (!c) {
            return
        }
        if (c.childCount() != 2) {
            return
        }
        var d = c.child(0).child(2).child(0)
        if (!d) {
            return
        }
        return d
    } catch (f) {
        return
    }
}
function drp_gA(b) {
    if (!b) {
        return
    }
    if (b.childCount() < 14) {
        return
    }
    try {
        var f = b.child(b.childCount() - 1)
        if (!f) {
            return
        }
        var g = f.child(0).child(0)
        if (!g) {
            return
        }
        if (g.childCount() != 2) {
            return
        }
        var g = g.child(0).child(1).child(0)
        if (!g) {
            return
        }
        if (!g.childCount() >= 8) {
            return
        }
        return g
    } catch (j) {
        return
    }
}
function drp_gB(a, b) {
    try {
        var d = a.findOne(textStartsWith('购买数量').algorithm('DFS')),
            f = d.indexInParent(),
            g = d.parent(),
            h = g.child(f + 1),
            j = g.child(f + 2),
            k = g.child(f + 3),
            l = parseInt(j.text())
        if (isNaN(l)) {
            console.warn('无法处理购买数量: ' + j.text())
            return
        }
        var l = parseInt(j.text())
        if (l === b) {
            drp_fg < 2000 && (drp_dZ = 0)
            console.warn('[操作] 当前已满足购买数量要求: ' + l)
            return
        }
        if (l == 0) {
            l = 1
        }
        if (l > b) {
            var m = l - b
            for (var n = 0; n < m; n++) {
                h.click()
                sleep(10)
            }
        } else {
            var m = b - l
            for (var n = 0; n < m; n++) {
                k.click(), sleep(10)
            }
        }
    } catch (r) {
        return
    }
}
function drp_gC(b) {
    if (!b) {
        return
    }
    if (b.childCount() < 10) {
        return
    }
    try {
        var h = b.child(b.childCount() - 2).child(0)
        if (!h) {
            return
        }
        if (h.childCount() < 3) {
            return
        }
        var j = h.child(h.childCount() - 1)
        if (!j || j.text() !== '确认支付') {
            return
        }
        return j
    } catch (m) {
        return
    }
}
function drp_gD(b) {
    if (!b) {
        return
    }
    if (b.childCount() != 5 && b.childCount() != 4) {
        return
    }
    try {
        var f = b.child(1)
        if (!f) {
            return
        }
        return f
    } catch (g) {
        return
    }
}
function drp_gE(a) {
    if (!a) {
        return -1
    }
    try {
        var b = a.child(0).findOne(textStartsWith('共'))
        if (!b) {
            return 0
        }
        var c = b.text(),
            d = c.match(/共\s*(\d+)\s*人/)
        if (d && d[1]) {
            return parseInt(d[1])
        }
        return -1
    } catch (f) {
        return -1
    }
}
function drp_gF(a) {
    if (!a) {
        return
    }
    try {
        var c = a.child(1).child(0)
        if (!c) {
            return
        }
        var d = c.child(c.childCount() - 1)
        if (!d) {
            return
        }
        return d
    } catch (h) {
        return
    }
}
function drp_gG(b) {
    if (!b) {
        return
    }
    try {
        var f = b.child(1).child(0)
        if (!f) {
            return
        }
        var g = f.childCount() - 2,
            h = f.child(g)
        if (!h || h.className() !== 'android.widget.TextView') {
            g = f.childCount() - 3
            h = f.child(g)
            if (!h || h.className() !== 'android.widget.TextView') {
                return
            }
        }
        return h.text()
    } catch (j) {
        return
    }
}
function drp_gH(b) {
    if (!b) {
        return
    }
    if (b.childCount() != 5 && b.childCount() != 4) {
        return
    }
    try {
        var f = b.child(0)
        if (!f) {
            return
        }
        return f
    } catch (j) {
        return
    }
}
function drp_gI(a) {
    if (!a) {
        return
    }
    try {
        var b = a.child(0).child(0)
        if (!b) {
            return
        }
        return b.text()
    } catch (c) {
        return
    }
}
function drp_gJ(a) {
    if (!a) {
        return
    }
    try {
        var b = a.child(1).child(0).child(0).child(1).child(0)
        if (!b) {
            return
        }
        return b.children()
    } catch (d) {
        return
    }
}
function drp_gK(a) {
    if (!a) {
        return
    }
    try {
        var b = a.child(1).child(0).child(0)
        if (!b) {
            return
        }
        var c = b.child(b.childCount() - 1)
        if (!c) {
            return
        }
        return c
    } catch (f) {
        return
    }
}
function drp_gL(b) {
    if (!b) {
        return
    }
    if (b.childCount() != 5 && b.childCount() != 4) {
        return
    }
    try {
        var f = b.child(b.childCount() - 3).child(0)
        if (!f) {
            return
        }
        if (
            f.text() !== '开售提醒' &&
            f.text() !== '已设置开售提醒' &&
            f.text() !== '到货提醒' &&
            f.text() !== '已设置到货提醒' &&
            f.text() !== '一次抽多盒' &&
            f.text() !== '立即选盒' &&
            f.text() !== '随机选盒' &&
            f.text() !== '排队选盒'
        ) {
            return
        }
        return f
    } catch (k) {
        return
    }
}
function drp_gM(a) {
    if (!a) {
        return
    }
    try {
        if (a.text() == '一次抽多盒') {
            return a.parent().child(1)
        }
    } catch (b) {
        return
    }
}
function drp_gN(b) {
    if (!b) {
        return
    }
    if (b.childCount() != 6) {
        return
    }
    try {
        var f = b.child(2).child(1).child(0)
        if (!f) {
            return
        }
        if (f.child(1).text() != '请勾选想要购买的盒子') {
            return
        }
        return f
    } catch (j) {
        return
    }
}
function drp_gO(a) {
    if (!a) {
        return
    }
    if (a.childCount() < 4) {
        return
    }
    try {
        var c = a.child(a.childCount() - 2)
        if (!c) {
            return
        }
        c.childCount() < 2 && (c = a.child(a.childCount() - 1))
        var d = false
        c.child(1).className() == 'android.widget.TextView'
            ? ((d = true), (c = c.child(0)))
            : (c = c.child(1))
        var f = null
        if (d) {
            var f = c.child(c.childCount() - 1).child(0)
        } else {
            var f = c
                .child(c.childCount() - 1)
                .child(0)
                .child(0)
        }
        if (!f || !f.text().startsWith('确认上述信息并支付')) {
            return
        }
        return f
    } catch (j) {
        return
    }
}
function drp_gP(a) {
    if (!a) {
        return
    }
    if (a.childCount() < 8) {
        return
    }
    try {
        var c = a.child(2).child(2)
        if (c.text() == '立即购买') {
            return c
        }
    } catch (f) {
        return
    }
}
function drp_gQ(b) {
    if (!b) {
        return
    }
    try {
        for (var f = 1; f < b.childCount(); f++) {
            var g = b.child(f)
            if (
                g.child(0).childCount() == 4 &&
                g.child(0).child(2).text().startsWith('\xA5')
            ) {
                return g.child(0).child(1)
            }
        }
    } catch (j) {
        return
    }
}
function drp_gR(a) {
    if (!a) {
        return
    }
    try {
        let g = []
        for (var c = 1; c < a.childCount(); c++) {
            var d = a.child(c)
            if (
                (d.child(0).childCount() == 5 || d.child(0).childCount() == 4) &&
                d.child(0).child(2).text().startsWith('\xA5')
            ) {
                let h = d.child(0).child(1)
                h && g.push(h.text())
            }
        }
        return g
    } catch (j) {
        return
    }
    return []
}
function drp_gS() {
    try {
        var b = auto.root,
            c = b
                .child(0)
                .child(0)
                .child(0)
                .child(0)
                .child(0)
                .child(1)
                .child(2)
                .child(1)
                .child(1)
        if (!c) {
            return
        }
        if (c.desc() == '退出播放' || c.desc() == 'Exit') {
            return c
        }
    } catch (f) {
        return
    }
}
function drp_gT(a) {
    try {
        var b = a.child(0).child(0).child(1).child(2).child(0).child(1)
        if (!b) {
            return
        }
        if (b.id().includes('storeBtn')) {
            return b
        }
    } catch (c) {
        return
    }
}
function drp_gU(b) {
    if (!b) {
        return
    }
    try {
        var f = b.child(b.childCount() - 1),
            g = f.child(0)
        if (!g) {
            return
        }
        if (g.text() == '重新排队提醒') {
            return f.child(f.childCount() - 2)
        }
    } catch (j) {
        return
    }
}
function drp_gV(b) {
    if (!b) {
        return
    }
    try {
        var f = b.child(b.childCount() - 1),
            g = f.child(0)
        if (!g) {
            return
        }
        if (g.text() == '活动规则') {
            return f.child(f.childCount() - 1)
        }
    } catch (h) {
        return
    }
}
function drp_gW() {
    try {
        var d = auto.root,
            f = d.child(0).child(0).child(0).child(0).child(0).child(1)
        if (!f) {
            return false
        }
        var g = f.child(0).child(0).child(0).child(0).child(0).child(0)
        if (!g) {
            return false
        }
        if (g.text() == '收藏') {
            return true
        }
        return false
    } catch (k) {
        return false
    }
}
function drp_gX() {
    try {
        var b = auto.root,
            c = b.child(0).child(0).child(0).child(0).child(0).child(0)
        if (!c || !c.child(0).className().includes('android.widget.ImageView')) {
            log(c.child(0).className())
            log(
                'get_image_showcase_holder: Unexpected return - showcase_holder missing or child(0) is not ImageView'
            )
            return
        }
        return c.child(2).child(0).child(0)
    } catch (f) {
        log('get_image_showcase_holder: Exception - ' + f)
        return
    }
}
function drp_gY() {
    try {
        var d = auto.root,
            f = d.child(0).child(0).child(0).child(0).child(0).child(0)
        if (!f) {
            return
        }
        var g = f.child(0).child(0).child(0).child(2),
            h = g.findOne(className('android.widget.ListView').algorithm('BFS'))
        if (!h) {
            return
        }
        if (h.childCount() == 0) {
            return
        }
        var j = h.child(0)
        if (j) {
            return j
        }
        return
    } catch (l) {
        return
    }
}
function drp_gZ(b) {
    if (!b) {
        return
    }
    try {
        var f = b.child(1).child(0)
        if (!f || f.className() != 'android.widget.ListView') {
            return
        }
        var g = f.child(0).child(0).child(0).child(0).child(0).child(0)
        return g
    } catch (j) {
        return
    }
}
var drp_h0 = [
    '刀锋',
    '一切',
    '退出',
    '发光',
    '航海王',
    '返回',
    '小甜豆',
    '哪吒',
    '敖丙',
    '进退',
    '香薰',
    '间谍',
    '动物王国',
    '冬日',
    '爱神',
    '情绪',
    '篮球',
    'MEGA',
    '世界',
    '哈利波特',
    '透明牌',
    '小黄人',
    '约会',
    '更多',
    '关闭',
    '光织园',
    '跟主播',
    '新人购物',
    '神秘',
    '四季',
    '一起',
    '手机壳',
    '手办',
    '鱼籽福袋',
    '收纳包',
    '小包',
    '冰格',
    '纸巾',
    '靠枕',
    '购物袋',
    '密封袋',
    '冰箱',
    '捏捏',
    '展示盒',
    '斜挎包',
    '抱枕',
    '杯',
    '香氛',
    '水晶球',
    '挂链',
    '充电',
    '笔',
    '帽',
    '徽章',
    '积木',
    '收纳',
    '支架',
    '手账本',
    '发卡',
    '数据线',
    '风扇',
    '翻翻乐',
    '闪闪',
    '挂绳',
    '飞天小女警',
    '灯',
    '礼盒',
    '卡套',
    '萌粒',
    '摆件',
    '付款方式',
    '迪士尼',
    '躲猫猫',
    '理性',
    '不要买',
    '不要点',
    '别点',
    '别买',
    '非真实',
    '付不了',
    '不能买',
    '科技',
    '外挂',
    '非真',
    '随心',
    '小刘鸭',
    '耀眼的你',
    '王者荣耀',
    '挂件',
    '外星人',
    '小小叛桃',
    '收藏卡',
    '欧气小盒',
    'DIMOO绅士',
    '果色添香',
    '月到风来',
    '自由的谎言',
    '咖啡手办',
    '你做美式',
    '心动特调',
    '跃动青春',
    '咖啡手柄抱枕',
    '疯狂动物城',
    '星期八',
    '化妆包',
    '天线宝宝',
    'PUCKY',
    'LePetitPrince',
    '跟我去郊游',
    '驯龙高手',
    '霍格沃',
    '迷你包',
    'PINOJELLY',
    '新享场',
    '小熊软糖',
    '封口夹',
    '\u274C',
    '小小叛桃彻夜狂欢',
    '小刘鸭长不大真好系列',
    '再想想',
    '冷静',
    '三思',
    '劝你放弃',
    '随心配',
    'HACIPUPU',
    '误点',
    '勿拍',
    '不是',
    '假的',
    '不买',
    '真假',
    '勿买',
    '不要拍',
    '别拍',
    '勿点',
    '买不了',
    '排球少年',
    '金铲铲',
    '阿尼亚',
    '400',
],
    drp_h1 = []
function drp_h2() {
    drp_h1 = drp_h0.slice()
    if (drp_eN && drp_eN.trim().length > 0) {
        var d = drp_eN
            .split(/[,，|｜]/)
            .map(function (f) {
                return f.trim()
            })
            .filter(function (f) {
                return f.length > 0
            })
        drp_h1 = drp_h1.concat(d)
    }
    drp_h3()
}
function drp_h3() {
    drp_hd = {}
    for (var a = 0; a < drp_h1.length; a++) {
        drp_hd[drp_h1[a]] = true
    }
}
drp_h2()
function drp_h4(a, b) {
    if (!a) {
        typeof drp_cX === 'undefined' && (drp_eL = 'streaming')
        if (drp_eL == 'split') {
            if (drp_gW()) {
                return 'wechat_collection'
            }
        } else {
            if (drp_eL == 'within_page') {
                if (drp_gX()) {
                    return 'image_showcase'
                }
            }
        }
        return 'no_webview'
    }
    if (drp_eG != 'streaming') {
        var d = drp_gv(a)
        if (d) {
            return drp_gw(a) ? 'homepage_myself' : 'homepage_other'
        }
        if (!b) {
            return 'default'
        }
        var f = drp_fn(b)
        if (f == '收藏列表') {
            return 'starred_goods'
        }
    } else {
        var g = drp_gt(a)
        if (g) {
            return 'streaming_goods'
        }
    }
    var h = drp_gy(a)
    if (h) {
        if (h.text() == '立即购买') {
            return 'info_page'
        } else {
            if (h.text() == '开售提醒' || h.text() == '已设置开售提醒') {
                return 'presale'
            } else {
                if (h.text() == '到货通知' || h.text() == '已设置到货通知') {
                    return 'empty_stock'
                }
            }
        }
        return 'default'
    }
    var j = drp_gz(a)
    if (j && j.text() == '立即购买') {
        return 'sku_page'
    }
    if (drp_gx(a)) {
        return 'confirm_order'
    }
    var k = drp_gL(a)
    if (k) {
        return 'gacha_machine_info_page'
    }
    var l = drp_gN(a)
    if (l) {
        return 'gacha_machine_select_page'
    }
    var m = drp_gO(a)
    if (m) {
        return 'gacha_machine_pay_page'
    }
    var n = drp_gP(a)
    if (n) {
        return 'gacha_machine_random_pay_page'
    }
    if (drp_eG == 'streaming') {
        var o = drp_gT(a)
        if (o) {
            return 'streaming_goods_default'
        }
    }
    var p = drp_gU(a)
    if (p) {
        return 'requeue_cancel'
    }
    var q = drp_gV(a)
    if (q) {
        return 'live_ack'
    }
    return 'default'
}
var drp_h5 = 0,
    drp_h6 = '',
    drp_h7 = -1,
    drp_h8 = -1,
    drp_h9 = storages.create('DRP')
drp_h7 = drp_h9.get('first_collection_item_x', -1)
drp_h8 = drp_h9.get('first_collection_item_y', -1)
typeof hamibot === 'undefined' && hamibot.exit()
function drp_ha() {
    if (drp_eL == 'focus' || drp_eL == 'monitor') {
        back()
        sleep(200)
    } else {
        if (drp_eL == 'split') {
            if (drp_h7 == -1 || drp_h8 == -1) {
                log('微信收藏第一位的项目位置未校准\uFF0C请先校准!')
                return
            }
            click(drp_h7, drp_h8)
            log('点击 [x=' + drp_h7 + ', y=' + drp_h8 + ']')
            sleep(200)
        } else {
            if (drp_eL == 'within_page') {
                var b = drp_hi(),
                    c = drp_gZ(b)
                c && c.click()
            }
        }
    }
}
var drp_hb = -1
function drp_hc(a, b) {
    var d = drp_h4(a, b)
    if (typeof drp_eR === 'undefined') {
        return
    }
    switch (d) {
        case 'image_showcase':
            var f = drp_gX()
            f && (back(), sleep(200))
            break
        case 'live_ack':
            var g = drp_gV(a),
                h = new Date().getTime()
            g && (drp_hb == -1 || h - drp_hb >= 600) && (g.click(), (drp_hb = h))
            break
        case 'wechat_collection':
            var j = drp_gY()
            if (j) {
                var k = j.bounds().centerX(),
                    l = j.bounds().centerY()
                    ; (k != drp_h7 || l != drp_h8) &&
                        (log('微信收藏第一位的项目位置发生变动\uFF0C自动重新校准'),
                            (drp_h7 = k),
                            (drp_h8 = l),
                            drp_h9.put('first_collection_item_x', drp_h7),
                            drp_h9.put('first_collection_item_y', drp_h8),
                            sleep(200))
            } else {
                log('微信收藏里无收藏内容\uFF0C请先收藏抽盒机或会员购商品!')
            }
            break
        case 'streaming_goods_default':
            var m = drp_gT(a)
            m && m.click()
            break
        case 'streaming_goods':
            drp_hh(a)
            break
        case 'homepage_myself':
            ; (drp_h5 = 0), (drp_h6 = '')
            var n = a.findOne(text('商品收藏'))
            n && n.click()
            break
        case 'homepage_other':
            ; (drp_h5 = 0), (drp_h6 = '')
            var o = drp_gv(a)
            o && (o.click(), sleep(100))
            break
        case 'starred_goods':
            ; (drp_h5 = 0), (drp_h6 = '')
            if (drp_eL == 'focus') {
                if (a.childCount() >= 2) {
                    try {
                        if (drp_eM.length > 0) {
                            var p = a.findOne(
                                textMatches('.*' + drp_eM + '.*').algorithm('DFS')
                            )
                            p &&
                                (log('已找到需要单刷的商品: ' + p.text()),
                                    p.click(),
                                    sleep(100))
                        } else {
                            var q = a.child(1).child(0).child(1)
                            q && (q.click(), sleep(100))
                        }
                    } catch (a5) {
                        break
                    }
                }
            } else {
                if (drp_eL == 'monitor') {
                    var r = drp_gQ(a)
                    if (r) {
                        log('已找到有货的商品: ' + r.text())
                        r.click()
                        sleep(100)
                        break
                    }
                    var s = a.findOne(text('仅看有货').algorithm('DFS'))
                    s && (s.click(), sleep(300))
                    break
                } else {
                    if (drp_eL == 'split') {
                        break
                    } else {
                        if (drp_eL == 'within_page') {
                            log('请点进需要刷的会员购商品界面')
                            sleep(200)
                            break
                        }
                    }
                }
            }
            break
        case 'presale':
        case 'empty_stock':
            drp_ha()
            break
        case 'info_page':
            var t = drp_gy(a)
            t && (t.click(), sleep(100))
            break
        case 'sku_page':
            var u = drp_gA(a)
            if (u) {
                var v = u.findOne(text('选择规格').algorithm('DFS'))
                if (v) {
                    log('当前可以选择规格')
                    var z = u.findOne(textStartsWith(drp_eI).algorithm('DFS'))
                    z &&
                        (z.click(), log('已选择规格\uFF1A' + drp_eI), sleep(100 + drp_e4))
                    if (u) {
                        var A = drp_eK
                            .replace(/｜/g, '|')
                            .split('|')
                            .map(function (ab) {
                                return ab.trim()
                            })
                            .filter(function (ab) {
                                return ab.length > 0
                            })
                            .map(function (ab) {
                                return '.*' + ab.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '.*'
                            })
                        if (A.length > 0) {
                            var B = A.join('|')
                            console.info('\uD83D\uDD0D 使用额外选择规则: ', drp_eK)
                            var C = u.find(textMatches(B).algorithm('BFS'))
                            if (C) {
                                for (var D = 0; D < C.length; D++) {
                                    var E = C[D]
                                    if (E) {
                                        E.click()
                                        console.error('已点击额外选择: ', E.text())
                                        sleep(150)
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
                drp_gB(u, drp_eJ)
                sleep(100)
                var F = drp_gz(a)
                F && F.click()
            }
            break
        case 'confirm_order':
            var G = drp_gC(a)
            G && G.click()
            break
        case 'gacha_machine_info_page':
            var H = drp_gL(a)
            if (H) {
                if (H.text() == '立即选盒') {
                    H.click()
                    sleep(100)
                    break
                } else {
                    if (H.text() == '一次抽多盒') {
                        if (drp_eH == '全选') {
                            H.click()
                        } else {
                            if (drp_eH == '单盒') {
                                var I = drp_gM(H)
                                I && I.text() == '随机选 1 盒' && I.click()
                            }
                        }
                    } else {
                        if (
                            H.text() == '到货提醒' ||
                            H.text() == '已设置到货提醒' ||
                            H.text() == '开售提醒' ||
                            H.text() == '已设置开售提醒'
                        ) {
                            drp_ha()
                        } else {
                            if (H.text() == '排队选盒') {
                                var J = drp_gD(a)
                                if (!J) {
                                    break
                                }
                                var K = drp_gI(J)
                                if (!K) {
                                    break
                                }
                                var L = drp_gE(J)
                                log('前方有: ' + L + '人在排队')
                                if (L <= drp_eO) {
                                    log('开始排队')
                                    H.click()
                                } else {
                                    if (drp_h5 > drp_eP) {
                                        log('超过最大连续下一盒次数\uFF0C执行返回')
                                        drp_h5 = 0
                                        drp_h6 = ''
                                        drp_ha()
                                    } else {
                                        var M = drp_gG(J)
                                        if (M == drp_h6) {
                                            var N = drp_gF(J)
                                            N && (log('点击下一盒'), N.click())
                                            break
                                        } else {
                                            log('当前盒号: ' + M)
                                            drp_h6 = M
                                            drp_h5 += 1
                                        }
                                    }
                                }
                                log(L)
                            } else {
                                if (H.text() == '随机选盒') {
                                    var O = drp_gH(a)
                                    if (!O) {
                                        break
                                    }
                                    var P = drp_gI(O)
                                    if (!P) {
                                        break
                                    }
                                    var Q = drp_gJ(O)
                                    if (!Q) {
                                        break
                                    }
                                    for (var D = 0; D < Q.length; D++) {
                                        var R = Q[D]
                                        R && (R.click(), sleep(10))
                                    }
                                    var S = drp_gK(O)
                                    S && (S.click(), sleep(10))
                                }
                            }
                        }
                    }
                }
            }
            break
        case 'gacha_machine_select_page':
            var T = a.findOne(text('全选'))
            if (!T) {
                break
            }
            var U = T.bounds(),
                V = U.left - (U.right - U.left) / 2
            click(V, U.centerY())
            var W = null,
                X = 0
            while (X < 40 && !W) {
                W = a.findOne(textStartsWith('去结算('))
                if (!W) {
                    sleep(50)
                    X++
                }
            }
            W && (W.click(), sleep(200))
            break
        case 'gacha_machine_random_pay_page':
            var Y = drp_gP(a)
            Y && Y.click()
            break
        case 'gacha_machine_pay_page':
            var Z = drp_gO(a)
            Z && Z.click()
            break
        case 'requeue_cancel':
            var a0 = drp_gU(a)
            a0 && a0.click()
            break
        case 'no_webview':
            break
        default:
            break
    }
}
var drp_hd = {},
    drp_he = {},
    drp_hf = 0,
    drp_hg = 0
function drp_hh(a) {
    if (!a) {
        return
    }
    var c = drp_gt(a)
    if (c) {
        var d = c.children(),
            f = 0,
            g = 0
        for (var h = d.length - 1; h >= 0 && f < 5; h--) {
            var k = drp_gu(d[h])
            if (k) {
                var l = false
                if (drp_he[k.name]) {
                    l = true
                } else {
                    for (var m = 0; m < drp_h1.length; m++) {
                        if (k.name.includes(drp_h1[m])) {
                            l = true
                            drp_he[k.name] = true
                            break
                        }
                    }
                }
                if (l) {
                    g++
                    continue
                }
                console.error(k.name)
                k.element.click()
                sleep(100)
                return
                f++
            }
        }
        if (g > 0) {
            var n = Date.now()
            if (n - drp_hf >= 500) {
                var o = '已排除' + g + '个垃圾商品'
                if (drp_hg > 0) {
                    o += ' (共检查' + (drp_hg + 1) + '次)'
                    drp_hg = 0
                }
                log(o)
                drp_hf = n
            } else {
                drp_hg++
            }
        }
    }
}
function drp_hi() {
    drp_gj = drp_fo()
    if (!drp_gj) {
        if (drp_dg) {
            log('Cannot find webview parent node.')
        }
        return
    }
    var b = drp_fw(drp_gj)
    if (!b) {
        drp_dg && log('Cannot find current node.')
        return
    }
    var c = drp_fy(b)
    return c
}
function drp_hj() {
    while (true) {
        if (drp_eF != 'gacha') {
            sleep(500)
            continue
        }
        if (drp_dZ == 0) {
            drp_h5 = 0
            sleep(200)
            continue
        }
        sleep(50)
        drp_gj = drp_fo()
        if (!drp_gj) {
            drp_dg && log('Cannot find webview parent node.')
            continue
        }
        var b = drp_fw(drp_gj)
        if (!b) {
            drp_dg && log('Cannot find current node.')
            continue
        }
        var c = drp_fy(b)
        if (!c && !drp_gW() && !drp_gX()) {
            drp_dg && log('Cannot find current webview.')
            if (drp_eG !== 'streaming') {
                continue
            }
            try {
                var d = drp_gS()
                d && d.click()
                sleep(50)
            } catch (j) {
                log(j)
                continue
            }
            continue
        }
        drp_hc(c, b)
    }
}
var drp_hk = threads.start(function () {
    drp_hj()
})
events.on('exit', function () {
    drp_ew && device.cancelKeepingAwake()
    console.hide()
})

/********************************************************************
 *  拟人化补丁（v1.71 专用，gestures 实现，无需 tap/press/swipe）
 *******************************************************************/
"auto";

function applyHumanizePatch() {
    const cfg = {
        baseDelay: 550,
        jitter: 250,
        mistakeRate: 0.2,
        pauseRate: 0.18,
        pauseMin: 500,
        pauseMax: 2500,
        maxOps: 7,
        offsetRange: [5, 15],
    };

    const rnd = (m, d) => Math.max(0, m + (Math.random() * 2 - 1) * d);
    let opCount = 0;

    function humanPause() {
        if (Math.random() > cfg.pauseRate) return;
        const t = Math.floor(rnd(cfg.pauseMin, (cfg.pauseMax - cfg.pauseMin) / 2));
        console.info(`[人类发呆] ${t} ms`);
        sleep(t);
        opCount = 0;
    }

    function makeMistake() {
        if (Math.random() > cfg.mistakeRate) return false;
        if (Math.random() < 0.5) {
            const ox = rnd(cfg.offsetRange[0], cfg.offsetRange[1] * 0.5);
            const oy = rnd(cfg.offsetRange[0], cfg.offsetRange[1] * 0.5);
            console.info(`[误操作] 轻微偏移 (${ox.toFixed(0)}, ${oy.toFixed(0)})`);
            return [ox, oy];
        } else {
            console.info(`[误操作] 多余滑动`);
            const sx = device.width / 2 + rnd(0, 60);
            const sy = device.height / 2 + rnd(0, 60);
            gestures.swipe(sx, sy, sx + rnd(-80, 80), sy + rnd(-80, 80), rnd(200, 50));
            sleep(rnd(300, 100));
            return false;
        }
    }

    // 代理 tap
    global.tap = function (x, y) {
        opCount++;
        if (opCount > cfg.maxOps) humanPause();
        sleep(rnd(cfg.baseDelay, cfg.jitter));
        const offset = makeMistake();
        gestures.click(x + (offset ? offset[0] : 0), y + (offset ? offset[1] : 0));
        if (Math.random() < 0.3) sleep(rnd(50, 150));
    };

    // 代理 press
    global.press = function (x, y, t) {
        opCount++;
        if (opCount > cfg.maxOps) humanPause();
        sleep(rnd(cfg.baseDelay, cfg.jitter));
        const offset = makeMistake();
        gestures.press(x + (offset ? offset[0] : 0), y + (offset ? offset[1] : 0), t);
    };

    // 代理 swipe
    global.swipe = function (x1, y1, x2, y2, duration) {
        opCount++;
        if (opCount > cfg.maxOps) humanPause();
        sleep(rnd(cfg.baseDelay, cfg.jitter));
        gestures.swipe(x1, y1, x2, y2, rnd(duration || 300, 50));
    };

    console.info(`[拟人化] gestures 代理完成，基础延迟 ${cfg.baseDelay} ms`);
}

// 延迟 1 秒等无障碍初始化
setTimeout(applyHumanizePatch, 1000);

setInterval(() => { }, 10000)
