<?php 
class Router {
    public function __construct(){
        $this->params = [];
    }

    public function manageRequest($url){
        $url = parse_url($url);   
        $url = $url['query'];
        foreach(explode('&', $url) as $val){
            $pair = explode('=', $val);
            $this->params[$pair[0]] = $pair[1];
        }
    }

    public function printResult(){
        $result = '';
        foreach($this->params as $key => $val){ 
            $result .= "'$key': '$val', ";
        }
        $result = substr($result, 0, -2);
        $rresult = '{'.$result.'}';
        echo $result;
    }
}
?>