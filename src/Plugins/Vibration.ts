﻿// Copyright 2013-2014 IntelliFactory
//
// Licensed under the Apache License, Version 2.0 (the "License"); you
// may not use this file except in compliance with the License.  You may
// obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
// implied.  See the License for the specific language governing
// permissions and limitations under the License.

/// org.apache.cordova.vibration plugin:
/// https://github.com/apache/cordova-plugin-vibration

module TypedPhoneGap.Vibration {

    export interface Plugin {
        vibrate(time: number): void;
    }

    var p =
        Utility.definePlugin<Plugin>({
            id: "org.apache.cordova.vibration",
            name: "TypedPhoneGap.Vibration",
            def: function () {
                return Utility.field<Plugin>(navigator, "notification");
            }
        });

    export function getPlugin() {
        return p.getPlugin();
    }
}

