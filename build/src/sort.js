"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vega_util_1 = require("vega-util");
function isSortField(sort) {
    return !!sort && (sort['op'] === 'count' || !!sort['field']) && !!sort['op'];
}
exports.isSortField = isSortField;
function isSortArray(sort) {
    return !!sort && vega_util_1.isArray(sort) && sort.every(function (s) { return vega_util_1.isString(s); });
}
exports.isSortArray = isSortArray;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsdUNBQTRDO0FBNkI1QyxxQkFBK0IsSUFBeUM7SUFDdEUsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvRSxDQUFDO0FBRkQsa0NBRUM7QUFFRCxxQkFBK0IsSUFBeUM7SUFDdEUsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLG1CQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLG9CQUFRLENBQUMsQ0FBQyxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUM7QUFDakUsQ0FBQztBQUZELGtDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZ2dyZWdhdGVPcH0gZnJvbSAndmVnYSc7XG5pbXBvcnQge2lzQXJyYXksIGlzU3RyaW5nfSBmcm9tICd2ZWdhLXV0aWwnO1xuXG5pbXBvcnQge1ZnQ29tcGFyYXRvck9yZGVyfSBmcm9tICcuL3ZlZ2Euc2NoZW1hJztcblxuXG5leHBvcnQgdHlwZSBTb3J0T3JkZXIgPSBWZ0NvbXBhcmF0b3JPcmRlciB8IG51bGw7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ydEZpZWxkPEY+IHtcbiAgLyoqXG4gICAqIFRoZSBkYXRhIFtmaWVsZF0oZmllbGQuaHRtbCkgdG8gc29ydCBieS5cbiAgICpcbiAgICogX19EZWZhdWx0IHZhbHVlOl9fIElmIHVuc3BlY2lmaWVkLCBkZWZhdWx0cyB0byB0aGUgZmllbGQgc3BlY2lmaWVkIGluIHRoZSBvdXRlciBkYXRhIHJlZmVyZW5jZS5cbiAgICovXG4gIGZpZWxkPzogRjtcbiAgLyoqXG4gICAqIEFuIFthZ2dyZWdhdGUgb3BlcmF0aW9uXShhZ2dyZWdhdGUuaHRtbCNvcHMpIHRvIHBlcmZvcm0gb24gdGhlIGZpZWxkIHByaW9yIHRvIHNvcnRpbmcgKGUuZy4sIGBcImNvdW50XCJgLCBgXCJtZWFuXCJgIGFuZCBgXCJtZWRpYW5cImApLlxuICAgKiBUaGlzIHByb3BlcnR5IGlzIHJlcXVpcmVkIGluIGNhc2VzIHdoZXJlIHRoZSBzb3J0IGZpZWxkIGFuZCB0aGUgZGF0YSByZWZlcmVuY2UgZmllbGQgZG8gbm90IG1hdGNoLlxuICAgKiBUaGUgaW5wdXQgZGF0YSBvYmplY3RzIHdpbGwgYmUgYWdncmVnYXRlZCwgZ3JvdXBlZCBieSB0aGUgZW5jb2RlZCBkYXRhIGZpZWxkLlxuICAgKlxuICAgKiBGb3IgYSBmdWxsIGxpc3Qgb2Ygb3BlcmF0aW9ucywgcGxlYXNlIHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgW2FnZ3JlZ2F0ZV0oYWdncmVnYXRlLmh0bWwjb3BzKS5cbiAgICovXG4gIG9wOiBBZ2dyZWdhdGVPcDtcblxuICAvKipcbiAgICogVGhlIHNvcnQgb3JkZXIuIE9uZSBvZiBgXCJhc2NlbmRpbmdcImAgKGRlZmF1bHQpLCBgXCJkZXNjZW5kaW5nXCJgLCBvciBgbnVsbGAgKG5vIG5vdCBzb3J0KS5cbiAgICovXG4gIG9yZGVyPzogU29ydE9yZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTb3J0RmllbGQ8Rj4oc29ydDogc3RyaW5nW10gfCBTb3J0T3JkZXIgfCBTb3J0RmllbGQ8Rj4pOiBzb3J0IGlzIFNvcnRGaWVsZDxGPiB7XG4gIHJldHVybiAhIXNvcnQgJiYgKHNvcnRbJ29wJ10gPT09ICdjb3VudCcgfHwgISFzb3J0WydmaWVsZCddKSAmJiAhIXNvcnRbJ29wJ107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NvcnRBcnJheTxGPihzb3J0OiBzdHJpbmdbXSB8IFNvcnRPcmRlciB8IFNvcnRGaWVsZDxGPik6IHNvcnQgaXMgc3RyaW5nW10ge1xuICByZXR1cm4gISFzb3J0ICYmIGlzQXJyYXkoc29ydCkgJiYgc29ydC5ldmVyeShzID0+IGlzU3RyaW5nKHMpKTtcbn1cbiJdfQ==