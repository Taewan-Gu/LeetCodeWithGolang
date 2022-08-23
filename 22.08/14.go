import (
    "strings"
)

func longestCommonPrefix(strs []string) string {
    comp := strs[0]
    
    for _, str := range strs {
        if comp == "" {
            break
        }
        for i := len(comp); i > -1; i-- {
            if i == 0 {
                comp = ""
                break 
            }
            if strings.HasPrefix(str, comp[:i]) {
                comp = comp[:i]
                break
            }
        }
    }
    
    return comp
}