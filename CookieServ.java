import java.io.*;
import java.util.Vector;
import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;
import java.text.SimpleDateFormat;
import java.util.Date;
public class CookieServ extends HttpServlet    
{
  public void doPost(HttpServletRequest request,
    HttpServletResponse response)
  throws IOException, ServletException  {
    processRequest(request, response);         
  }

  public void doGet(HttpServletRequest request,
    HttpServletResponse response)
  throws IOException, ServletException  { 
    processRequest(request, response);
  } 

  private void processRequest(HttpServletRequest request,
    HttpServletResponse response) 
  throws IOException, ServletException {
    // String [] str1= request.getParameter("item");       // item name
    // String [] str2= request.getParameter("qty");        // item quantity
    // String str3 = req.getParameter("add");        // submit button by name add
    // String str4 = req.getParameter("list");       // submit button by name list
    PrintWriter out = response.getWriter();

    String str = request.getQueryString();
    String [] param = str.split("&");
    String str1 = param[1];
    String str2 = param[2];
    str1 = str1.substring(5);
    str2 = str2.substring(4);
    String [] item = str1.split(",");
    String [] qty = str2.split(",");


    // for(int i=0;i<item.length;i++){
    //   out.println(item[i]);
    //   out.println(qty[i]);

    // }

    try{
      SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

      String formatted = formatter.format(new Date().getTime());

      Date date = formatter.parse(formatted);

      if (request.getCookies() != null) {
        for (Cookie cookie : request.getCookies()) {

          if (cookie.getName().equals("jadrn004")) {

            int count =0;
            for(int i=0;i<item.length;i++){


              String query = "UPDATE on_hand SET last_date_modified = '" + (new java.sql.Date(date.getTime())) + "', on_hand_quantity = on_hand_quantity - '" + qty[i] + "' WHERE sku = '"+ item[i] +"'";
              int c = DBHelper.executeCommand(query);
              if(c !=0)
              {
                query = "INSERT into merchandise_out  values ('"+ item[i] +"', '" + (new java.sql.Date(date.getTime())) + "', "  + qty[i] +")";
                c = DBHelper.executeCommand(query);
                if(c !=0){
                  count++;  
                }
              }
              else{
                out.println("error");
              }


            }
            //end of for loop
            if(count == item.length){
              out.println("success");
            }
            else{
              out.println("error");
            }

            cookie.setValue("");
            cookie.setPath("/");
            response.addCookie(cookie);
          }
        }
    // toDo = "/WEB-INF/jsp/menu.jsp";
      // response.sendRedirect("/jadrn004/WEB-INF/jsp/ConfirmPage.jsp");                     

      } 
      //       end of cookie scope
    }
    catch(Exception e){

    }


    
  }

} 
