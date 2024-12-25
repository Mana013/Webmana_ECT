import java.util.Scanner ;
public class Money {
    public static void main(String[] args) {
        Scanner kb = new Scanner(System.in);
        String s = kb.next( ).trim();
        String money = " ";
        for(int k = s.length() - 1, c = 1; k >=0; k --, c++) {
            money = s.substring(k, k+1) + money;
            if( c%3 ==0 && k > 0 && s.charAt(k-1) != '-' ) 
                money = ","+money;
        }
        System.out.println( money ); 
    }

}