;/*FB_PKG_DELIM*/

__d("LSClearAllPublicChatEventStartAndEndTimes",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.resolve(c)}a.__sproc_name__="LSMailboxClearAllPublicChatEventStartAndEndTimesStoredProcedure";e.exports=a}),null);
__d("LSClearAllScreenTimeRecords",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(a){return b.forEach(b.db.table(321).fetch(),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSFamilyCenterSupervisionClearAllScreenTimeRecordsStoredProcedure";e.exports=a}),null);
__d("LSClearAllSupervisionEdgeRecords",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(a){return b.forEach(b.db.table(319).fetch(),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSFamilyCenterSupervisionClearAllSupervisionEdgeRecordsStoredProcedure";e.exports=a}),null);
__d("LSClearAllSupervisionMetadataRecords",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(a){return b.forEach(b.db.table(320).fetch(),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSFamilyCenterSupervisionClearAllSupervisionMetadataRecordsStoredProcedure";e.exports=a}),null);
__d("LSDeleteAllPublicChatFbEventData",["LSClearAllPublicChatEventStartAndEndTimes"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[];return c.sequence([function(a){return c.storedProcedure(b("LSClearAllPublicChatEventStartAndEndTimes"))},function(a){return c.resolve(d)}])}a.__sproc_name__="LSOmnistoreSettingsDeleteAllPublicChatFbEventDataStoredProcedure";e.exports=a}),null);
__d("LSDeleteThenInsertBotProfileInfoV2",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(299).put({botId:a[0],isCreatedByViewer:a[1],description:a[4],tintColor:a[2],shortDescription:a[3]})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSContactDeleteThenInsertBotProfileInfoV2StoredProcedure";e.exports=a}),null);
__d("LSDeleteThenInsertMessagingPrivacySettings",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(288).put({userId:a[0],readReceiptsDisabled:a[1],e2eeXmaPreviewsDisabled:a[3]})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSOmnistoreSettingsDeleteThenInsertMessagingPrivacySettingsStoredProcedure";e.exports=a}),null);
__d("LSDeleteThenInsertRankingRequest",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(135).put({scoreType:a[0],requestId:a[1]})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSRankingDeleteThenInsertRankingRequestStoredProcedure";e.exports=a}),null);
__d("LSDeleteThenInsertRankingScore",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(134).put({contactId:a[0],scoreType:a[1],contactType:a[2],score:a[3],scoreIndex:a[4]})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSRankingDeleteThenInsertRankingScoreStoredProcedure";e.exports=a}),null);
__d("LSTruncateQuietTime",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(a){return b.forEach(b.db.table(317).fetch(),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSOmnistoreSettingsTruncateQuietTimeStoredProcedure";e.exports=a}),null);
__d("LSUpdateCommunityThreadStaleState",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.filter(b.db.table(9).fetch([[[a[0]]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&([b.i64.cast([0,23]),b.i64.cast([0,21]),b.i64.cast([0,18]),b.i64.cast([0,26])].some(function(a){return b.i64.eq(c.threadType,a)})||b.i64.eq(c.threadType,b.i64.cast([0,152])))}).next().then(function(c,d){d=c.done;c=c.value;return d?0:(c.item,b.db.table(294).fetch([[[a[0]]]]).next().then(function(c,d){d=c.done;c=c.value;return d?b.db.table(294).add({threadKey:a[0],threadQueueSequenceId:b.i64.cast([0,0]),isStale:a[1]}):(c.item,b.forEach(b.db.table(294).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({isStale:a[1]})}))}))})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSMailboxUpdateCommunityThreadStaleStateStoredProcedure";e.exports=a}),null);
__d("LSUpdateThreadNullState",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.forEach(b.db.table(9).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({threadPictureUrl:a[1],threadPictureUrlFallback:a[2],threadPictureUrlExpirationTimestampMs:a[3],nullstateDescriptionText1:a[5],nullstateDescriptionType1:a[10],nullstateDescriptionText2:a[6],nullstateDescriptionType2:a[11],nullstateDescriptionText3:a[7],nullstateDescriptionType3:a[12],capabilities:a[15],threadName:a[16],threadSubtype:a[4]})})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSMailboxUpdateThreadNullStateStoredProcedure";e.exports=a}),null);