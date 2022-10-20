import (
    "container/list"
    "fmt"
)

func isValid(s string) bool {
    arr := list.New()
    
    for _, v := range s {
        v := string(v)
        switch v {
        case "(", "[", "{":
            arr.PushBack(v)
        case ")", "]", "}":
            tmp := arr.Back()
            if tmp == nil {
                return false
            }
            if (v == ")" && tmp.Value == "(") || (v == "}" && tmp.Value == "{") || (v == "]" && tmp.Value == "[") {
                arr.Remove(tmp)
            } else {
                return false
            }
        }
    }
    if arr.Len() == 0 {
        return true    
    }
    return false
}